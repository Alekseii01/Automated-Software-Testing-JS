const fs = require('fs');
const path = require('path');

/**
 * Loads test data from a JSON file
 * @param {string} fileName - The name of the file without the extension
 * @returns {Object} An object containing the test data
 */
function loadTestData(fileName) {
  const filePath = path.join(__dirname, '..', 'test-data', `${fileName}-data.json`);
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading test data from ${filePath}:`, error);
    return {};
  }
}

module.exports = {
  loadTestData
}; 