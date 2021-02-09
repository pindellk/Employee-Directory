export default {
  getEmployees: function () {
    return fetch("https://randomuser.me/api/?results=20").then((data) =>
      data.json()
    );
  },
  searchEmployees: function (nameSearch) {
    return fetch(
      "https://randomuser.me/api/?results=20&inc=" + nameSearch
    ).then((data) => data.json());
  },
};
