---
description: "Next.js starter"
draft: false
title: 'Next.js'
categories: ["tutorial", "nextjs"]
linkTitle: "Next.js"
---

Here's how to get started with flags.gg in next.js.

## Installation

{{< install-toggle copy="true" >}}
@flags-gg/react-library
{{< /install-toggle >}}

## src/app/layout.tsx

```jsx
import ClientProvider from "~/components/ClientProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
         <ClientProvider>
           <main>{children}</main>
         </ClientProvider>
      </body>
    </html>
  );
}
```

## src/components/ClientProvider.tsx

```jsx
"use client";
import { FlagsProvider } from "@flags-gg/nextjs-library";

const flagsConfig = {
  projectId: "YOUR_PROJECT_ID",
  agentId: "YOUR_AGENT_ID",
  environmentId: "YOUR_ENVIRONMENT_ID",
};

const App = () => {
  return <FlagsProvider flagsConfig={flagsConfig}>{children}</FlagsProvider>;
};
```

this will now allow you to use the flags.gg SDK in your next.js app and any flags that have been set in the platform

## Usage

```jsx
"use client";

import { useFlags } from "@flags-gg/nextjs-library";

export function Component() {
  const { is } = useFlags();

  if (!is("intro")?.enabled()) {
    return null;
  }

  return <div>show component</div>;
}
```

This is to use a flag that's been set on the platform, but you can also create flags inside your app.

```jsx
"use client"
import { useFlags } from "@flags-gg/nextjs-library";

export function Component()
  const { is } = useFlags();

  is("offlineFlag").initalize(false);

  if (!is("offlineFlag")?.enabled()) {
    return null;
  }

  return (
    <div>show offline content</div>
  );
};
```
