import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default defineConfig({
    input: "./src/index.ts",
    output: {
        dir: "dist",
        format: "cjs",
    },
    plugins: [typescript(), terser()],
});
