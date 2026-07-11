export default tseslint.config(
  {
    ignores: [
      'dist/**',
      'coverage/**',
      'eslint.config.mjs',
    ],
  },

  eslint.configs.recommended,

  ...tseslint.configs.recommended,

  prettierRecommended,

  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
);