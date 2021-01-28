export default {
  getEmployees: function () {
    return fetch("https://randomuser.me/api/?results=20").then((data) =>
      data.json()
    );
  },
};
