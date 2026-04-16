const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = './src/assets';
fs.readdirSync(dir).forEach(file => {
  if (/\.(jpg|jpeg|png)$/i.test(file)) {
    sharp(path.join(dir, file))
      .webp({ quality: 75 })
      .toFile(path.join(dir, file.replace(/\.[^.]+$/, '.webp')));
  }
});