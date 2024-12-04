/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	endOfLine: 'auto',
	importOrder: ['^components/(.*)$', '^[./]'],
	importOrderSortSpecifiers: true,
	printWidth: 120,
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	useTabs: true,
	tabWidth: 4,
	plugins: ['@trivago/prettier-plugin-sort-imports'],
};

export default config;
