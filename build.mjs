// Wraps src/game.html (the page body published as the claude.ai artifact)
// into a standalone index.html that runs in any browser.
import { readFileSync, writeFileSync } from 'node:fs';

const src = readFileSync(new URL('./src/game.html', import.meta.url), 'utf8');
const split = src.indexOf('<div id="app">');
if (split < 0) throw new Error('src/game.html is missing <div id="app">');
const head = src.slice(0, split).trim();
const body = src.slice(split).trim();
const out = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
${head}
</head>
<body>
${body}
</body>
</html>
`;
writeFileSync(new URL('./index.html', import.meta.url), out);
console.log('wrote index.html (' + out.length + ' bytes)');
