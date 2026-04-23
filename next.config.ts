import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubActions ? "/FrontEnd.HairStyleQuestionnaire" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true
};

export default nextConfig;
