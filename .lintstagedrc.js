module.exports = {
  '*.{ts,tsx,js,jsx}': ['eslint --fix', 'prettier -w'],
  '*.{ts,tsx}': () => 'tsc -p tsconfig.json --noEmit',
};
