import { fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import _import from "eslint-plugin-import";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/node_modules", "**/dist"]
}, ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended"), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        import: fixupPluginRules(_import)
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node
        },

        parser: tsParser,
        ecmaVersion: 12,
        sourceType: "module"
    },

    settings: {
        react: {
            version: "detect"
        }
    },

    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],

        quotes: ["error", "double", {
            allowTemplateLiterals: true
        }],

        semi: ["error", "always"],

        "object-curly-spacing": ["error", "always", {
            objectsInObjects: false
        }],

        "comma-dangle": ["error", "never"],

        "sort-imports": ["error", {
            allowSeparatedGroups: true,
            ignoreCase: true,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
        }],

        "import/order": ["error", {
            groups: [["builtin", "external", "type"], "parent"],

            pathGroups: [{
                pattern: "~/utils/**",
                group: "parent",
                position: "before"
            }, {
                pattern: "~/components/**",
                group: "parent",
                position: "before"
            }, {
                pattern: "~/styles/**",
                group: "parent",
                position: "before"
            }, {
                pattern: "./components/**",
                group: "parent",
                position: "before"
            }, {
                pattern: "./styles/**",
                group: "parent",
                position: "before"
            }, {
                pattern: "./assets/**",
                group: "parent",
                position: "before"
            }],

            pathGroupsExcludedImportTypes: [],

            alphabetize: {
                order: "asc"
            },

            "newlines-between": "always",
            warnOnUnassignedImports: true
        }]
    }
}];