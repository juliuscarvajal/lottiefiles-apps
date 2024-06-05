const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        ['autofill']: 'repeat(auto-fill, minmax(192px, 1fr))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
