/**
 * @param {object} options 
 * @param {number} options.currentPage
 * @param {number} options.results
 * @param {string} options.excludeStr
 * @returns {Promise<Array>}
 */
export function getUsers(options) {
  const { currentPage, results, excludeStr = 'id', gender = 'female' } = options;
  const usersPromise = fetch(
    `https://randomuser.me/api/?seed=12345&results=${results}&nat=ua&page=${currentPage}&exc=${excludeStr}&gender=${gender}`
  )
    .then((res) => res.json())
    .then((responseWithUsers) => responseWithUsers.results);

  return usersPromise;
}

/**
 * 
 * @param {object} queryObj 
 * @returns {string}
 */
function generateQueryString (queryObj) {
  const queryEntries = Object.entries(queryObj);

  const queryPairs = queryEntries.map(([key, value]) => `${key}=${value}`);
  
  const query = queryPairs.join('&');

  return `?${query}`;
}

const obj1 = {
  seed: 12345,
  results: 10,
  page: 1,
}

const str = generateQueryString(obj1);

 console.log(str); // '?seed=12345&results=10&page=1'