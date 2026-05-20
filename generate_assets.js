const fs = require('fs');
const b64 = fs.readFileSync('icon_base64_clean.txt', 'utf8').trim();
fs.writeFileSync('src/remotion/assets.ts', 'export const DIVO_BASE64 = "data:image/png;base64,' + b64 + '";');
console.log('Assets file generated successfully');
