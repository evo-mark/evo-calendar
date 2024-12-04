import configPrettier from "eslint-config-prettier";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import js from "@eslint/js";
import ts from 'typescript-eslint'

export default [
  {
    files: ["**/*.ts","**/*.js","**/*.vue"]
  },
  {
    ignores: [
      "dist/",
      "tests/*",
      "node_modules/",
      "src/shims-tsx.d.ts",
      "src/shims-vue.d.ts",
      "*.config.js",
      "src/main.ts",
      "test/",
      "dist/*.hot-update.json",
      "dist/index.html",
      "dist/webpack-stats.json",
      "testumdbuild"
    ]
  },
	js.configs.recommended,
  ...ts.configs.recommended,
	...pluginVue.configs["flat/recommended"],
	configPrettier,
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  },
	{
		languageOptions: {
			globals: {
				...globals.node,
        ...globals.es2015,
        ...globals.browser
			},
		},
		rules: {
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'vue/no-mutating-props': 'off',
      'vue/multi-word-component-names': 'off',
			"vue/multi-word-component-names": "off",
			"vue/valid-v-slot": "off",
		},
	}
];
