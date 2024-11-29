/**
 * @param {object} options 
 * @param {number} options.currentPage
 * @param {number} options.results
 * @param {string} options.excludeStr
 * @returns {Promise<Array>}
 */
export function getUsers({ currentPage, results, excludeStr = 'id' }) {
  // const { currentPage, results, excludeStr = 'id' } = options;
  const usersPromise = fetch(
    `https://randomuser.me/api/?seed=12345&results=${results}&nat=ua&page=${currentPage}&exc=${excludeStr}`
  )
    .then((res) => res.json())
    .then((responseWithUsers) => responseWithUsers.results);

  return usersPromise;
}
