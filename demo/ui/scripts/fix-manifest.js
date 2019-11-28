const path = require('path');
const fs = require('fs');

const filepath = path.resolve(__dirname, '../build/assets/icons/manifest.json');
let json = JSON.parse(fs.readFileSync(filepath, 'utf8'));
json.icons = json.icons.map((icon) => ({
  ...icon,
  src: `/assets/icons/${icon.src}`,
}));
fs.writeFileSync(filepath, JSON.stringify(json, null, 2));
