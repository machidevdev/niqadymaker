// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const directoryPath = path.join(__dirname, 'public', 'niqadys');

// Read all files in the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter only image files and sort them
  const imageFiles = files
    .filter(
      (file) =>
        file.toLowerCase().endsWith('.png') ||
        file.toLowerCase().endsWith('.jpg') ||
        file.toLowerCase().endsWith('.jpeg')
    )
    .sort();

  // Rename each file
  imageFiles.forEach((file, index) => {
    const oldPath = path.join(directoryPath, file);
    const extension = path.extname(file);
    const newFileName = `niqady${index + 1}${extension}`;
    const newPath = path.join(directoryPath, newFileName);

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error(`Error renaming ${file}:`, err);
      } else {
        console.log(`Renamed ${file} to ${newFileName}`);
      }
    });
  });
});
