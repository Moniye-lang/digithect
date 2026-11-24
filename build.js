import fs from 'fs';
import path from 'path';

console.log('[build] Preparing Digithect production build for Vercel...');

const distDir = path.resolve('dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy index.html to dist/index.html
fs.copyFileSync('index.html', path.join(distDir, 'index.html'));
console.log('[build] Copied index.html -> dist/index.html');

// Copy public directory contents to dist
const publicDir = path.resolve('public');
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, distDir, { recursive: true });
  console.log('[build] Copied public/ -> dist/');
}

// Copy root logo image if exists
if (fs.existsSync('digithect-logo.jpg')) {
  fs.copyFileSync('digithect-logo.jpg', path.join(distDir, 'digithect-logo.jpg'));
  console.log('[build] Copied digithect-logo.jpg -> dist/digithect-logo.jpg');
}

console.log('[build] Digithect build complete.');
