import path from "path";
import type { NextConfig } from "next";

// Turbopack doesn't pass opts.from to PostCSS workers, so @tailwindcss/postcss
// computes its resolution base as path.dirname(path.resolve("")) — the parent
// of process.cwd(). Setting NODE_PATH gives @tailwindcss/node's enhanced-resolve
// an absolute fallback so tailwindcss is found regardless of that context dir.
const nodeModulesPath = path.join(process.cwd(), "node_modules");
process.env.NODE_PATH = process.env.NODE_PATH
  ? `${process.env.NODE_PATH}${path.delimiter}${nodeModulesPath}`
  : nodeModulesPath;

const nextConfig: NextConfig = {
  reactCompiler: true,
};

export default nextConfig;
