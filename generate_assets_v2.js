const fs = require('fs');
const path = require('path');

const iconPath = path.join(__dirname, 'public/assets/Icono.png');
const outputPath = path.join(__dirname, 'src/remotion/assets.ts');

try {
  const buffer = fs.readFileSync(iconPath);
  const base64 = buffer.toString('base64');
  // Strip any accidental whitespace or newlines
  const cleanBase64 = base64.replace(/\s/g, '');
  
  const content = `export const DIVO_BASE64 = "data:image/png;base64,${cleanBase64}";`;
  
  fs.writeFileSync(outputPath, content);
  console.log('Assets file generated successfully with clean Base64');
} catch (err) {
  console.error('Error generating assets:', err);
}
