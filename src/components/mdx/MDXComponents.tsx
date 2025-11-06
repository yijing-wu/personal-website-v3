/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Button from "../atoms/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { myTextGrey, myMintGreen, myMilkYellow } from "../../styles/colors";

// Simple MDX components mapping using your existing theme and styles.
const MDXComponents: Record<string, React.ComponentType<any>> = {
  // Button in MDX will use MUI Button so it looks consistent
  Button: ({ children, ...props }: { children?: React.ReactNode }) => (
    <Button variant="contained" {...props}>
      {children}
    </Button>
  ),

  // Headings
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
    <>
      <Typography
        component="h1"
        variant="h4"
        gutterBottom
        sx={{ color: myMilkYellow }}
        {...props}
      />
      <Box sx={{ my: 2, borderBottom: `1px solid ${myTextGrey}` }} />
    </>
  ),
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <>
      <Typography
        component="h2"
        variant="h5"
        gutterBottom
        sx={{ color: myMilkYellow }}
        {...props}
      />
      <Box sx={{ my: 2, borderBottom: `1px solid ${myTextGrey}` }} />
    </>
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <Typography
      component="h3"
      variant="h6"
      gutterBottom
      sx={{ color: myMilkYellow }}
      {...props}
    />
  ),

  h4: (props: React.ComponentPropsWithoutRef<"h4">) => (
    <Typography
      component="h4"
      variant="subtitle1"
      gutterBottom
      sx={{ color: myMilkYellow }}
      {...props}
    />
  ),
  h5: (props: React.ComponentPropsWithoutRef<"h5">) => (
    <Typography
      component="h5"
      variant="subtitle2"
      gutterBottom
      sx={{ color: myMilkYellow }}
      {...props}
    />
  ),

  // Paragraphs
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <Typography
      component="p"
      variant="body1"
      paragraph
      sx={{ color: myTextGrey }}
      {...props}
    />
  ),

  // Links - keep default color but use underline animation class if desired
  a: ({ children, href, ...props }: React.ComponentPropsWithoutRef<"a">) => (
    <a
      href={href}
      className="underline-animation"
      style={{ color: myMintGreen }}
      {...props}
    >
      {children}
    </a>
  ),

  // Inline code and preformatted blocks
  code: (props: React.ComponentPropsWithoutRef<"code">) => (
    <Box
      component="code"
      sx={{
        fontFamily: "SFMono-Regular, monospace",
        // backgroundColor: "#2b2b2b",
        // color: myMilkYellow,
        padding: "2px 6px",
        borderRadius: "4px",
      }}
      {...props}
    />
  ),

  // Blockquote
  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <Box
      component="blockquote"
      sx={{
        borderLeft: `4px solid ${myMintGreen}`,
        margin: 0,
        marginLeft: 0,
        paddingLeft: 16,
        color: myTextGrey,
        fontStyle: "italic",
        backgroundColor: "rgba(194, 222, 209, 0.03)",
      }}
      {...props}
    />
  ),

  // Images - responsive and centered
  img: (props: React.ComponentPropsWithoutRef<"img">) => {
    const { alt, src, title, ...rest } =
      props as React.ComponentPropsWithoutRef<"img">;
    return (
      <Box
        component="img"
        src={src}
        alt={alt}
        title={title}
        sx={{
          display: "block",
          maxWidth: "100%",
          margin: "12px auto",
          borderRadius: 6,
          boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
        }}
        {...(rest as Record<string, unknown>)}
      />
    );
  },

  // Table
  table: (props: React.ComponentPropsWithoutRef<"table">) => (
    <Box
      component="table"
      sx={{
        width: "100%",
        borderCollapse: "collapse",
        my: 2,
      }}
      {...props}
    />
  ),
  thead: (props: React.ComponentPropsWithoutRef<"thead">) => (
    <Box
      component="thead"
      sx={{
        background: "rgba(255,255,255,0.03)",
      }}
      {...props}
    />
  ),
  th: (props: React.ComponentPropsWithoutRef<"th">) => (
    <Box
      component="th"
      sx={{
        textAlign: "left",
        padding: "8px 12px",
        borderBottom: `1px solid rgba(255,255,255,0.06)`,
        color: myMilkYellow,
        fontWeight: 600,
      }}
      {...props}
    />
  ),
  td: (props: React.ComponentPropsWithoutRef<"td">) => (
    <Box
      component="td"
      sx={{
        padding: "8px 12px",
        borderBottom: `1px solid rgba(255,255,255,0.03)`,
        color: myTextGrey,
      }}
      {...props}
    />
  ),

  // details / summary
  details: (props: React.ComponentPropsWithoutRef<"details">) => (
    <Box
      component="details"
      sx={{
        background: "rgba(255,255,255,0.02)",
        padding: "8px 12px",
        borderRadius: 6,
        my: 1,
      }}
      {...props}
    />
  ),
  summary: (props: React.ComponentPropsWithoutRef<"summary">) => (
    <Box
      component="summary"
      sx={{
        cursor: "pointer",
        color: myMilkYellow,
        fontWeight: 600,
        outline: "none",
      }}
      {...props}
    />
  ),

  // keyboard key
  kbd: (props: React.ComponentPropsWithoutRef<"kbd">) => (
    <Box
      component="kbd"
      sx={{
        fontFamily: "SFMono-Regular, monospace",
        background: "#222",
        color: myMilkYellow,
        padding: "3px 8px",
        borderRadius: 4,
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      {...props}
    />
  ),

  // deleted text
  del: (props: React.ComponentPropsWithoutRef<"del">) => (
    <Box component="del" sx={{ opacity: 0.6 }} {...props} />
  ),

  // Lists
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <Box component="ul" sx={{ pl: 3 }} {...props} />
  ),
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <Box component="ol" sx={{ pl: 3 }} {...props} />
  ),
  li: (props: React.ComponentPropsWithoutRef<"li">) => (
    <Box component="li" sx={{ mb: 1 }} {...props} />
  ),
};

export default MDXComponents;
