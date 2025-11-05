import React from "react";
import Button from "../atoms/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { myTextGrey, myMintGreen, myMilkYellow } from "../../styles/colors";

// Simple MDX components mapping using your existing theme and styles.
const MDXComponents: Record<string, React.ComponentType<any>> = {
  // Button in MDX will use MUI Button so it looks consistent
  Button: ({ children, ...props }: any) => (
    <Button variant="contained" color="primary" {...props}>
      {children}
    </Button>
  ),

  // Headings
  h1: (props: any) => (
    <Typography
      component="h1"
      variant="h3"
      gutterBottom
      sx={{ color: myMilkYellow }}
      {...props}
    />
  ),
  h2: (props: any) => (
    <Typography
      component="h2"
      variant="h4"
      gutterBottom
      sx={{ color: myMilkYellow }}
      {...props}
    />
  ),
  h3: (props: any) => (
    <Typography
      component="h3"
      variant="h5"
      gutterBottom
      sx={{ color: myMilkYellow }}
      {...props}
    />
  ),

  // Paragraphs
  p: (props: any) => (
    <Typography
      component="p"
      variant="body1"
      paragraph
      sx={{ color: myTextGrey }}
      {...props}
    />
  ),

  // Links - keep default color but use underline animation class if desired
  a: ({ children, href, ...props }: any) => (
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
  code: (props: any) => (
    <Box
      component="code"
      sx={{
        fontFamily: "SFMono-Regular, monospace",
        backgroundColor: "#2b2b2b",
        color: myMilkYellow,
        padding: "2px 6px",
        borderRadius: "4px",
      }}
      {...props}
    />
  ),
  pre: (props: any) => (
    <Box
      component="pre"
      sx={{
        overflowX: "auto",
        backgroundColor: "#1f1f1f",
        color: myMilkYellow,
        padding: 2,
        borderRadius: 1,
      }}
      {...props}
    />
  ),

  // Lists
  ul: (props: any) => <Box component="ul" sx={{ pl: 3 }} {...props} />,
  ol: (props: any) => <Box component="ol" sx={{ pl: 3 }} {...props} />,
  li: (props: any) => <Box component="li" sx={{ mb: 1 }} {...props} />,
};

export default MDXComponents;
