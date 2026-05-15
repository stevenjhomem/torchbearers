import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

const root = process.cwd();
const distIndex = path.join(root, 'dist', 'index.html');

const vite = await createServer({
  root,
  appType: 'custom',
  logLevel: 'error',
  optimizeDeps: {
    noDiscovery: true,
  },
  server: {
    middlewareMode: true,
  },
});

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx');
  const appHtml = renderToString(React.createElement(App));
  const html = await fs.readFile(distIndex, 'utf8');

  await fs.writeFile(distIndex, html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`));
} finally {
  await vite.close();
}
