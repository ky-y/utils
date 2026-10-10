import { resolve } from "node:path";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [dts(), tsconfigPaths()],
    build: {
        lib: {
            entry: {
                index: resolve(__dirname, "src/index.ts"),
            },
            formats: ["es", "cjs"],
        },
        rolldownOptions: {
            external: ["fast-sort", "uuid"],
        },
    },
    test: {
        exclude: [...configDefaults.exclude, "dist/**"],
    },
});
