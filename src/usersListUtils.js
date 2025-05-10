/**
 * Filters users by age.
 * @param {Array} users - List of users.
 * @param {number} minAge - Minimum age.
 * @param {number} maxAge - Maximum age.
 * @returns {Array} - Filtered list of users.
 */
export function filterUsersByAge(users, minAge, maxAge) {
  if (!Array.isArray(users)) {
    throw new Error('Users must be an array');
  }
  return users.filter((user) => user.age >= minAge && user.age <= maxAge);
}

/**
 * Sorts the list of users by name (alphabetically).
 * @param {Array} users - List of users.
 * @returns {Array} - Sorted list of users.
 */
export function sortUsersByName(users) {
  if (!Array.isArray(users)) {
    throw new Error('Users must be an array');
  }
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Finds a user by ID.
 * @param {Array} users - List of users.
 * @param {number} id - User ID.
 * @returns {Object|null} - Found user, or null if user not found.
 */
export function findUserById(users, id) {
  if (!Array.isArray(users)) {
    throw new Error('Users must be an array');
  }
  return users.find((user) => user.id === id) || null;
}

/**
 * Checks if there is a user with the specified email in the list.
 * @param {Array} users - List of users.
 * @param {string} email - Email to check.
 * @returns {boolean} - True if a user with this email exists, otherwise false.
 */
export function isEmailTaken(users, email) {
  if (!Array.isArray(users)) {
    throw new Error('Users must be an array');
  }
  return users.some((user) => user.email === email);
}
