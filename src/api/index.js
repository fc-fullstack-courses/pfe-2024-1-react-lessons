export function getUsers(currentPage) {
  const usersPromise = fetch(
    `https://randomuser.me/api/?seed=12345&results=10&nat=ua&page=${currentPage}`
  ).then((res) => res.json());

  return usersPromise;
}
