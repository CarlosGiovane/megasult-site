// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Set DEPLOY_TARGET=github-pages (see .github/workflows/deploy-gh-pages.yml) to build a fully
// static, base-path-prefixed export for GitHub Pages instead of the default Cloudflare SSR build.
const isGithubPagesBuild = process.env.DEPLOY_TARGET === "github-pages";
const githubPagesBase = "/splashy-web-glow/";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    prerender: isGithubPagesBuild ? { enabled: true, crawlLinks: true } : undefined,
    router: isGithubPagesBuild ? { basepath: githubPagesBase } : undefined,
  },
  nitro: isGithubPagesBuild ? false : undefined,
  vite: isGithubPagesBuild ? { base: githubPagesBase } : undefined,
});
