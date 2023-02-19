import {
  LivepeerConfig,
  ThemeConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";

import React from "react";
import CreateAndViewAsset from "../livepeer/CreateAndViewAsset";

const LivepeerLayout = ({ children }: { children: React.ReactNode }) => {
  const livepeerClient = createReactClient({
    provider: studioProvider({
      apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY || "",
    }),
  });

  const theme: ThemeConfig = {
    colors: {
      accent: "rgb(0, 145, 255)",
      containerBorderColor: "rgba(0, 145, 255, 0.9)",
    },
    fonts: {
      display: "Inter",
    },
  };

  return (
    <LivepeerConfig client={livepeerClient} theme={theme}>
      {children}
    </LivepeerConfig>
  );
};

export default LivepeerLayout;
