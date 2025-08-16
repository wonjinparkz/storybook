#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Create assets directory if it doesn't exist
const assetsDir = path.join(__dirname, 'src', 'government', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Missing files to create
const missingFiles = [
  'balloon-bottom.png',
  'ico_step_active.svg',
  'img_visual.png', 
  'head_logo.svg'
];

// Create PNG files (1x1 transparent pixel)
const transparentPNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==', 'base64');

// Create SVG template
const createSVG = (name) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <title>${name}</title>
  <rect width="24" height="24" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="8" fill="#6c757d">${name}</text>
</svg>`;

missingFiles.forEach(fileName => {
  const filePath = path.join(assetsDir, fileName);
  
  if (!fs.existsSync(filePath)) {
    if (fileName.endsWith('.png')) {
      fs.writeFileSync(filePath, transparentPNG);
      console.log(`Created: ${fileName} (PNG)`);
    } else if (fileName.endsWith('.svg')) {
      const svgContent = createSVG(fileName.replace('.svg', ''));
      fs.writeFileSync(filePath, svgContent);
      console.log(`Created: ${fileName} (SVG)`);
    }
  } else {
    console.log(`Exists: ${fileName}`);
  }
});

console.log('\nMissing assets creation completed!');