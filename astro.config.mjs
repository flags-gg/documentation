import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.flags.gg",
  integrations: [
    starlight({
      title: "Flags.gg",
      logo: {
        src: "./src/assets/logo.png",
        alt: "Flags.gg Logo",
      },
      favicon: "/favicon.ico",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/flags-gg",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/flags-gg/documentation/edit/main/",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Quick Start", slug: "getting-started" },
          ],
        },
        {
          label: "Concepts",
          items: [
            { label: "Architecture", slug: "concepts/architecture" },
            { label: "Authentication", slug: "concepts/authentication" },
            { label: "Caching", slug: "concepts/caching" },
            { label: "Circuit Breaker", slug: "concepts/circuit-breaker" },
            {
              label: "Environment Overrides",
              slug: "concepts/environment-overrides",
            },
          ],
        },
        {
          label: "Frontend SDKs",
          items: [
            { label: "Overview", slug: "sdks" },
            {
              label: "React",
              items: [
                { label: "Quickstart", slug: "sdks/react" },
                { label: "FlagsProvider", slug: "sdks/react/provider" },
                { label: "useFlags Hook", slug: "sdks/react/hooks" },
                { label: "Secret Menu", slug: "sdks/react/secret-menu" },
              ],
            },
            {
              label: "Next.js",
              items: [
                { label: "Quickstart", slug: "sdks/nextjs" },
                { label: "App Router", slug: "sdks/nextjs/app-router" },
                { label: "Pages Router", slug: "sdks/nextjs/pages-router" },
              ],
            },
          ],
        },
        {
          label: "Backend SDKs",
          items: [
            {
              label: "Go",
              items: [
                { label: "Quickstart", slug: "sdks/go" },
                { label: "Configuration", slug: "sdks/go/configuration" },
                { label: "Caching", slug: "sdks/go/caching" },
              ],
            },
            {
              label: "Rust",
              items: [
                { label: "Quickstart", slug: "sdks/rust" },
                { label: "Configuration", slug: "sdks/rust/configuration" },
                { label: "Tower Middleware", slug: "sdks/rust/tower-middleware" },
              ],
            },
            {
              label: "Python",
              items: [
                { label: "Quickstart", slug: "sdks/python" },
                { label: "Configuration", slug: "sdks/python/configuration" },
                { label: "Caching", slug: "sdks/python/caching" },
              ],
            },
            {
              label: "PHP",
              items: [
                { label: "Quickstart", slug: "sdks/php" },
                { label: "Configuration", slug: "sdks/php/configuration" },
                { label: "Caching", slug: "sdks/php/caching" },
              ],
            },
            {
              label: "C#",
              items: [
                { label: "Quickstart", slug: "sdks/csharp" },
                { label: "Configuration", slug: "sdks/csharp/configuration" },
                {
                  label: "Dependency Injection",
                  slug: "sdks/csharp/dependency-injection",
                },
              ],
            },
            {
              label: "Swift",
              items: [
                { label: "Quickstart", slug: "sdks/swift" },
                { label: "Configuration", slug: "sdks/swift/configuration" },
                { label: "Platforms", slug: "sdks/swift/platforms" },
              ],
            },
            {
              label: "Kotlin",
              items: [
                { label: "Quickstart", slug: "sdks/kotlin" },
                { label: "Configuration", slug: "sdks/kotlin/configuration" },
                { label: "Coroutines", slug: "sdks/kotlin/coroutines" },
              ],
            },
            {
              label: "Ruby",
              items: [
                { label: "Quickstart", slug: "sdks/ruby" },
                { label: "Configuration", slug: "sdks/ruby/configuration" },
                { label: "Caching", slug: "sdks/ruby/caching" },
              ],
            },
          ],
        },
        {
          label: "API Reference",
          items: [{ label: "Overview", slug: "api-reference" }],
        },
      ],
    }),
  ],
});
