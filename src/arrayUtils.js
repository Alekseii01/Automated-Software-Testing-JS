export function findMax(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }
  return Math.max(...arr);
}

export function findMin(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }
  return Math.min(...arr);
}

export function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }
  return [...new Set(arr)];
}
