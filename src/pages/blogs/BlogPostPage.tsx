import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MDXComponents from "../../components/mdx/MDXComponents";
import { BackButton } from "../../components/atoms";

type MDXModule = {
  default: React.ComponentType<Record<string, unknown>>;
  meta?: { title?: string };
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
      <Typography variant="h4" gutterBottom>
        {Title}
      </Typography>
      <Comp components={MDXComponents} />
    </Box>
  );
}
