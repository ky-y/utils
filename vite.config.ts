import { resolve } from "node:path";
import dts from "vite-plugin-dts";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [dts({ exclude: ["src/tests/**", "node_modules/**"] })],
    resolve: {
        tsconfigPaths: true,
    },
    build: {
        lib: {
            entry: {
                index: resolve(import.meta.dirname, "src/index.ts"),
            },
            formats: ["es", "cjs"],
        },
        rolldownOptions: {
            // Keep Node built-ins as imports. Otherwise Vite replaces them with empty browser stubs.
            external: ["fast-sort", "uuid", /^node:/],
        },
    },
    test: {
        exclude: [...configDefaults.exclude, "dist/**"],
    },
});
