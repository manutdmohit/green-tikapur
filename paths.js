const fs = require('fs');
const path = require('path');

const imagesDirectory = path.join('assets', 'GalleryImages');

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

const galleryImages = getImagePaths();
console.log(galleryImages);
