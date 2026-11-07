import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      "remark-gfm",
      "remark-frontmatter",
      "remark-mdx-frontmatter",
    ],
    rehypePlugins: ["rehype-highlight"],
  },
});

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "https://raw.githubusercontent.com/SebastianHallman/Resume/main/resume.pdf",
        permanent: false,
      },
      {
        source: "/cv",
        destination:
          "https://raw.githubusercontent.com/SebastianHallman/Resume/main/resume.pdf",
        permanent: false,
      },
    ];
  },
  experimental: {
    agentFeedback: true,
    agentUpgrade: "security",
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default withMDX(nextConfig);
