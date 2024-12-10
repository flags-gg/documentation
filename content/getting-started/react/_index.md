+++
description = "React Starter"
title = 'React'
categories = ["tutorial", "react"]
+++

Here's how to get started with flags.gg in react.

## Installation

```bash npm2yarn
npm install @flags-gg/react-library
```

## App.tsx

```jsx
import { FlagsProvider } from "@flags-gg/react-library";

const flagsConfig = {
  projectId: "YOUR_PROJECT_ID",
  agentId: "YOUR_AGENT_ID",
  environmentId: "YOUR_ENVIRONMENT_ID",
};

const App = () => {
  return (
    <FlagsProvider flagsConfig={flagsConfig}>
      <App />
    </FlagsProvider>
  );
};
```

this will now allow you to use the flags.gg SDK in your react app and any flags that have been set in the platform

## Usage

```jsx
import { useFlags } from "@flags-gg/react-library";

const App = () => {
  const { is } = useFlags();

  return <div>{is("intro")?.enabled() && <div>show intro</div>}</div>;
};
```

This is to use a flag that's been set on the platform, but you can also create flags inside your app.

```jsx
import { useFlags } from "@flags-gg/react-library";

const App = () => {
  const { is } = useFlags();

  is("offlineFlag").initalize(false);

  return (
    <div>{is("offlineFlag")?.enabled() && <div>show offline content</div>}</div>
  );
};
```

Now as long as you have a secret menu enabled in the platform, you can turn on/off the offline flag without having to use the platform to enable/disable it.
