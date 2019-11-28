const path = require('path');
const fs = require('fs');

const filepath = path.resolve(__dirname, '../build/index.html');

let content = fs.readFileSync(filepath, 'utf8');
content = content.replace(/href="manifest/gm, (match) => {
  return `href="/assets/icons/manifest`;
});
content = content.replace(/href="([^/])/gm, (match) => {
  return `href="/${match[match.length - 1]}`;
});
fs.writeFileSync(filepath, content);
