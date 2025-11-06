import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import {
  myMintGreen,
  myMintGreenC0Alpha,
  myMilkYellow,
  myTextGrey,
} from "../../styles/colors";
import MDXComponents from "../../components/mdx/MDXComponents";
import { BackButton } from "../../components/atoms";

type MDXModule = {
  default: React.ComponentType<Record<string, unknown>>;
  meta?: { title?: string; tags?: string[]; date?: string };
};

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [MDXComp, setMDXComp] = useState<MDXModule | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    // Use Vite's glob to find MDX files under src/content/blogs
    const modules = import.meta.glob("../../content/blogs/*.mdx") as Record<
      string,
      () => Promise<unknown>
    >;

    const key = Object.keys(modules).find(
      (k) =>
        k.endsWith(`/${slug}.mdx`) ||
        k.endsWith(`/${slug}-blog.mdx`) ||
        k.includes(slug)
    );

    if (!key) {
      setError("Post not found");
      return;
    }

    if (key) {
      const loader = modules[key];
      loader()
        .then((mod) => {
          const m = mod as MDXModule;
          setMDXComp(m);
        })
        .catch((e) => setError(String(e)));
    }
  }, [slug]);

  if (error)
    return (
      <Box sx={{ padding: 2 }}>
        <Typography>{error}</Typography>
      </Box>
    );
  if (!MDXComp)
    return (
      <Box sx={{ padding: 2 }}>
        <Typography>Loading...</Typography>
      </Box>
    );

  const Title = MDXComp.meta?.title || slug;

  const Comp = MDXComp.default;

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ mb: 2 }}>
        <BackButton />
      </Box>

      {/* List title and date */}
      <Typography
        component="h1"
        variant="h4"
        gutterBottom
        sx={{ color: myMilkYellow, fontWeight: "bold" }}
      >
        {Title}
      </Typography>

      {MDXComp.meta?.date && (
        <Typography
          component="span"
          variant="caption"
          sx={{ color: myTextGrey }}
        >
          {MDXComp.meta.date}
        </Typography>
      )}

      {/* Divider */}
      <Box sx={{ my: 2, borderBottom: `2px solid ${myTextGrey}` }} />

      {/* Render MDX content */}
      <div className="mdx-content">
        <Comp components={MDXComponents} />
      </div>

      {/* list tags at the end */}
      <Box sx={{ mt: 2 }}>
        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 1 }}>
          {(MDXComp.meta?.tags || []).map((t: string) => (
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
      </Box>
    </Box>
  );
}
