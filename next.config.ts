import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubActions ? "/FrontEnd.HairStyleQuestionnaire" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
00ed14ee0f17c605be3516200054f0f6f6c052c
};

export default nextConfig;
