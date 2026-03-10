import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  preflight: false, // 🔴 disables chakra reset that breaks Tailwind
});

export const system = createSystem(defaultConfig, config);
