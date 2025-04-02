import eslint from '@eslint/js'
import perfectionist from 'eslint-plugin-perfectionist'
import prettier from 'eslint-plugin-prettier'
import tseslint from 'typescript-eslint'

export default tseslint.config({
	files: ['src/**/*.{ts,tsx}'],
	extends: [
		eslint.configs.recommended,
		perfectionist.configs['recommended-natural'],
		tseslint.configs.recommended,
	],
	plugins: {
		'@typescript-eslint': tseslint.plugin,
		'prettier': prettier,
	},
	languageOptions: {
		parser: tseslint.parser,
		parserOptions: {
			projectService: true,
			tsconfigRootDir: import.meta.dirname,
		},
	},
	rules: {
		'@typescript-eslint/no-unused-vars': 'off',
		'perfectionist/sort-imports': [
			'warn',
			{
				groups: [
					['external', 'external-type'],
					['internal', 'internal-type'],
					['parent', 'parent-type'],
					['sibling-type', 'sibling'],
					['index', 'index-type'],
					'side-effect',
					'side-effect-style',
					'style',
				],
				internalPattern: ['^@/'],
			},
		],
		'prettier/prettier': 'warn',
	},
})
