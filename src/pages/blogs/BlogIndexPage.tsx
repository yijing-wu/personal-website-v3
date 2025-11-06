import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SortIcon from "@mui/icons-material/Sort";
import CheckIcon from "@mui/icons-material/Check";
import { BackButton } from "../../components/atoms";

import { trackBlogTagClick, trackBlogView } from "../../config/GoogleAnalytics";
import {
  myMilkYellow,
  myMintGreen,
  myMintGreenC0Alpha,
  myNavy,
  myTextGrey,
  myTextDark,
  myTextLight,
} from "../../styles/colors";

type PostItem = {
  slug: string;
  title: string;
  date?: string;
  summary?: string;
  tags?: string[];
  visible?: boolean;
};

export default function BlogIndexPage() {
  // Use eager import to read metadata at build time / startup
  type MDXModule = {
    default?: unknown;
    meta?: {
      title?: string;
      date?: string;
      summary?: string;
      tags?: string[];
      visible?: boolean;
    };
  };

  const modules = import.meta.glob<MDXModule>("../../content/blogs/*.mdx", {
    eager: true,
  });

  const posts: PostItem[] = Object.entries(modules).map(([path, mod]) => {
    const filename = path.split("/").pop() || "";
    const slugBase = filename.replace(/\.mdx$/, "");
    const slug = `/blog/${slugBase.replace(/[^a-zA-Z0-9-_]/g, "")}`;
    const meta = mod?.meta || {};
    return {
      slug,
      title: meta.title || slugBase.replace(/-/g, " "),
      date: meta.date,
      summary: meta.summary,
      tags: meta.tags || [],
      visible: meta.visible !== false,
    };
  });

  const visiblePosts = posts.filter((p) => p.visible !== false);

  // sort by date desc if present
  visiblePosts.sort((a, b) => (b.date || "").localeCompare(a.date || ""));

  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("date-desc");
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const allTags = useMemo(() => {
    const s = new Set<string>();
    visiblePosts.forEach((p) => (p.tags || []).forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, [visiblePosts]);

  const filtered = selectedTag
    ? visiblePosts.filter((p) => (p.tags || []).includes(selectedTag))
    : visiblePosts;

  const visible = [...filtered].sort((a, b) => {
    if (sortBy === "date-desc")
      return (b.date || "").localeCompare(a.date || "");
    if (sortBy === "date-asc")
      return (a.date || "").localeCompare(b.date || "");
    if (sortBy === "title-asc")
      return (a.title || "").localeCompare(b.title || "");
    if (sortBy === "title-desc")
      return (b.title || "").localeCompare(a.title || "");
    return 0;
  });

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ mb: 2 }}>
        <BackButton />
      </Box>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: myMilkYellow, fontWeight: 700 }}
      >
        Blog
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          mb: 2,
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {/* Tags: wrap and use small outlined chips; selected tag gets filled/primary styling */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Chip
            label="All"
            clickable
            size="small"
            onClick={() => {
              setSelectedTag(null);
              trackBlogTagClick("All");
            }}
            sx={{
              mr: 1,
              mb: 1,
              borderRadius: 1,
              textTransform: "none",
              backgroundColor:
                selectedTag === null ? myMintGreen : "transparent",
              color: selectedTag === null ? myNavy : myMintGreen,
              border: `1px solid ${myMintGreenC0Alpha}`,
            }}
          />
          {allTags.map((t) => {
            const isSelected = selectedTag === t;
            return (
              <Chip
                key={t}
                label={t}
                clickable
                size="small"
                onClick={() => {
                  setSelectedTag((s) => (s === t ? null : t));
                  trackBlogTagClick(t);
                }}
                sx={{
                  mr: 1,
                  mb: 1,
                  borderRadius: 1,
                  textTransform: "none",
                  backgroundColor: isSelected ? myMintGreen : "transparent",
                  color: isSelected ? myNavy : myMintGreen,
                  border: `1px solid ${myMintGreenC0Alpha}`,
                  "&:hover": {
                    backgroundColor: isSelected
                      ? myMintGreen
                      : myMintGreenC0Alpha,
                  },
                }}
              />
            );
          })}
        </Box>

        {/* Sort: icon + short label; menu shows check for selected option */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            aria-label="sort"
            onClick={(e) => setAnchorEl(e.currentTarget)}
            size="small"
            sx={{ color: myMilkYellow }}
          >
            <SortIcon fontSize="small" />
          </IconButton>
          <Typography
            variant="caption"
            sx={{ ml: 0.5, color: myTextGrey, fontWeight: 600 }}
          >
            {sortBy === "date-desc" && "Date ↓"}
            {sortBy === "date-asc" && "Date ↑"}
            {sortBy === "title-asc" && "Title A→Z"}
            {sortBy === "title-desc" && "Title Z→A"}
          </Typography>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            MenuListProps={{ sx: { bgcolor: "background.paper" } }}
          >
            <MenuItem
              onClick={() => {
                setSortBy("date-desc");
                setAnchorEl(null);
              }}
              sx={{ color: myTextGrey }}
            >
              {sortBy === "date-desc" && (
                <CheckIcon
                  fontSize="small"
                  sx={{ mr: 1, color: myMintGreen }}
                />
              )}
              <Typography
                sx={{
                  color: sortBy === "date-desc" ? myTextDark : myTextGrey,
                }}
              >
                Date (new → old)
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setSortBy("date-asc");
                setAnchorEl(null);
              }}
              sx={{ color: myTextGrey }}
            >
              {sortBy === "date-asc" && (
                <CheckIcon
                  fontSize="small"
                  sx={{ mr: 1, color: myMintGreen }}
                />
              )}
              <Typography
                sx={{
                  color: sortBy === "date-asc" ? myTextDark : myTextGrey,
                }}
              >
                Date (old → new)
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setSortBy("title-asc");
                setAnchorEl(null);
              }}
              sx={{ color: myTextGrey }}
            >
              {sortBy === "title-asc" && (
                <CheckIcon
                  fontSize="small"
                  sx={{ mr: 1, color: myMintGreen }}
                />
              )}
              <Typography
                sx={{
                  color: sortBy === "title-asc" ? myTextDark : myTextGrey,
                }}
              >
                Title (A → Z)
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setSortBy("title-desc");
                setAnchorEl(null);
              }}
              sx={{ color: myTextGrey }}
            >
              {sortBy === "title-desc" && (
                <CheckIcon
                  fontSize="small"
                  sx={{ mr: 1, color: myMintGreen }}
                />
              )}
              <Typography
                sx={{
                  color: sortBy === "title-desc" ? myTextDark : myTextGrey,
                }}
              >
                Title (Z → A)
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Stack>
      <List sx={{ width: "100%", maxWidth: 800, mx: "auto" }}>
        {visible.map((p) => (
          <ListItem
            key={p.slug}
            alignItems="flex-start"
            sx={{
              flexDirection: "column",
              alignItems: "flex-start",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              borderRadius: 2,
              p: 2.5,
              mb: 2,
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              transition: "all 0.25s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              },
            }}
          >
            {/* Title */}
            <Link
              to={p.slug}
              style={{ textDecoration: "none", width: "100%" }}
              onClick={() => trackBlogView(p.title, p.tags || [], p.slug)}
            >
              <Typography
                variant="h6"
                sx={{
                  color: myMilkYellow,
                  fontWeight: 600,
                  mb: 0.5,
                  transition: "color 0.2s",
                  "&:hover": { color: myMintGreen },
                }}
              >
                {p.title}
              </Typography>
            </Link>

            {/* Date */}
            <Typography
              variant="caption"
              sx={{
                display: "block",
                color: `${myTextGrey}99`,
                textTransform: "uppercase",
                letterSpacing: 0.5,
                mb: 1,
              }}
            >
              {p.date}
            </Typography>

            {/* Summary */}
            <Typography
              variant="body2"
              sx={{
                color: myTextLight,
                lineHeight: 1.6,
                mb: 1.5,
              }}
            >
              {p.summary}
            </Typography>

            {/* Tags */}
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {(p.tags || []).map((t) => (
                <Chip
                  key={t}
                  label={t}
                  size="small"
                  sx={{
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    color: myMintGreen,
                    backgroundColor: "transparent",
                    fontWeight: 500,
                    border: `1px solid ${myMintGreenC0Alpha}`,
                  }}
                />
              ))}
            </Stack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
