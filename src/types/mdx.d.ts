declare module "*.mdx" {
  import { ComponentType } from "react";

  const MDXComponent: ComponentType<
    { components?: Record<string, any> } & Record<string, any>
  >;
  export default MDXComponent;
}
