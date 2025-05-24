const prettierConfig = {
  trailingComma: 'es5',
  tabWidth: 2,
  useTabs: false, // Accept tabs as indentation or only spaces
  printWidth: 120, // Prettier will wrap code longer than that
  bracketSpacing: true, // Add spaces inside brackets
  arrowParens: 'avoid', // Arrow function with only one param won't have parentheses
  semi: true, // Auto-add semi-colon at the end of statements
  singleQuote: false, // Use single or double quotes for strings
  jsxSingleQuote: false,
  quoteProps: 'as-needed',

  tailwindFunctions: ['clsx'],
  tailwindStylesheet: './src/app/[locale]/styles.css',
  plugins: ['prettier-plugin-tailwindcss'],

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
        singleQuote: true,
      },
    },
    {
      files: ['*.js', '*.mjs'],
      options: {
        singleQuote: true,
      },
    },
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
  ],
};

export default prettierConfig;
