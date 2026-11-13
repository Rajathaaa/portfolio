// Run once after you deploy, so LinkedIn can find the preview image:
//   node set-site-url.js https://your-username.github.io/your-repo/
const fs = require('fs'), path = require('path');
let url = process.argv[2];
if (!url || !/^https:\/\//.test(url)) { console.error('Usage: node set-site-url.js https://your-live-site/'); process.exit(1); }
if (!url.endsWith('/')) url += '/';
const file = path.join(__dirname, 'index.html');
let html = fs.readFileSync(file, 'utf8'), n = 0;
const sub = (re, val) => { html = html.replace(re, (_, a, b) => { n++; return a + val + b; }); };
sub(/(<link rel="canonical" href=")[^"]*(")/, url);
sub(/(<meta property="og:url" content=")[^"]*(")/, url);
sub(/(<meta property="og:image" content=")[^"]*(")/, url + 'og-image.png');
sub(/(<meta name="twitter:image" content=")[^"]*(")/, url + 'og-image.png');
sub(/("url":")[^"]*(")/, url);
fs.writeFileSync(file, html);
console.log(`Updated ${n} tags in index.html -> ${url}`);
