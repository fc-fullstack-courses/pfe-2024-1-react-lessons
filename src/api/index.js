import queryString from 'query-string';

/**
 * @param {object} options
 * @param {number} options.page
 * @param {number} options.results
 * @param {string} options.exc
 * @returns {Promise<Array>}
 */
export function getUsers(options) {
  const defaultOptions = {
    seed: '12345',
    results: 10,
    page: 1,
    nat: ['ua'],
    exc: ['id'],
  };

  const finalizedOptions = {
    ...defaultOptions,
    ...options,
  };

  const queryStr = queryString.stringify(finalizedOptions, {
    arrayFormat: 'comma',
  });

  const usersPromise = fetch(`https://randomuser.me/api/?${queryStr}`)
    .then((res) => res.json())
    .then((responseWithUsers) => responseWithUsers.results);

  return usersPromise;
}

// /**
//  *
//  * @param {object} queryObj
//  * @returns {string}
//  */
// function generateQueryString(queryObj) {
//   const queryEntries = Object.entries(queryObj);

//   const queryPairs = queryEntries.map(([key, value]) => `${key}=${value}`);

//   const query = queryPairs.join('&');

//   return `?${query}`;
// }

// const obj1 = {
//   seed: 12345,
//   results: 10,
//   page: 1,
//   nat: ['ua','uk','us','jp']
// };

// const str = generateQueryString(obj1);

// console.log(str); // '?seed=12345&results=10&page=1'

// const str2 = queryString.stringify(obj1, {arrayFormat: 'comma'});

// console.log(`queryString: ${str2}`);
