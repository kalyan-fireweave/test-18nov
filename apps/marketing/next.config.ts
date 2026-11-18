import { fireweaveDefine } from "@fireweaveai/web-sdk/define";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@clinic/ui"],
  compiler: { define: fireweaveDefine() },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
