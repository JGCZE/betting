import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import perfectionist from 'eslint-plugin-perfectionist'

export default tseslint.config(
  {ignores: ['dist', './src/types/generatedTypes.ts']},
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'perfectionist': perfectionist,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {allowConstantExport: true},
      ],

      // --- ABECEDA (Perfectionist) ---

      // 1. Řazení importů
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          // TOTO JE TA OPRAVA: Definujeme vlastní skupinu 'react'
          newlinesBetween: 'never',
          customGroups: {
            value: {
              react: ['react', 'react-dom', 'react-*'],
            },
            type: {
              react: ['react', 'react-dom', 'react-*'],
            },
          },
          groups: [
            'type',
            'react', // Teď už ESLint ví, co to znamená (díky customGroups výše)
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'side-effect',
            'style',
            'object',
            'unknown',
          ],
        },
      ],

      // 2. Řazení props v JSX
      'perfectionist/sort-jsx-props': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreCase: true,
        },
      ],

      // 3. Řazení objektů
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreCase: true,
          partitionByComment: false,
        },
      ],

      // 4. Řazení TypeScript definic
      'perfectionist/sort-interfaces': ['error', {type: 'natural', order: 'asc'}],
      'perfectionist/sort-object-types': ['error', {type: 'natural', order: 'asc'}],
      'perfectionist/sort-union-types': ['error', {type: 'natural', order: 'asc'}],
    },
  },
)