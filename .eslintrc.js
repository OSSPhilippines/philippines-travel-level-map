// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
	],
	overrides: [],
	parserOptions: {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
	},
	plugins: ['react'],
	globals: {
		test: 'readonly',
		expect: 'readonly',
		describe: 'readonly',
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: [2, 'always'],

		// allow async-await
		'generator-star-spacing': 'off',
		
		// allow paren-less arrow functions
		'arrow-parens': 'off',
		'one-var': 'off',

		// 'import/first': 'off',
		// 'import/named': 'error',
		// 'import/namespace': 'error',
		// 'import/default': 'error',
		// 'import/export': 'error',
		// 'import/extensions': 'off',
		// 'import/no-unresolved': 'off',
		// 'import/no-extraneous-dependencies': 'off',
		'prefer-promise-reject-errors': 'off',

		// react
		'react/no-unknown-property': 'off',
		'react/prop-types': 'off',
		'no-mixed-spaces-and-tabs': 'off',

		// custom
		'space-before-function-paren': [2, 'always'],
		'keyword-spacing': [2, { before: true, after: true }],
		'space-before-blocks': [2, 'always'],
		'comma-dangle': [2, 'always-multiline'],
		'no-console': 'off',
		'no-multi-str': 'off',
		curly: 1,
	},
};
