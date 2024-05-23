import fs from 'fs';
import path from 'path';

const imagesDirectory = path.join(__dir, 'assets', 'GalleryImages');

const getImagePaths = () => {
  const imagePaths = [];

  try {
    const files = fs.readdirSync(imagesDirectory);
    files.forEach((file) => {
      imagePaths.push(`/assets/GalleryImages/${file}`);
    });
  } catch (err) {
    console.error('Error reading directory:', err);
  }

  return imagePaths;
};

console.log(getImagePaths());
