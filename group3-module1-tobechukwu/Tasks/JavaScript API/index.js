const identity = document.getElementById("id");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const streetAddress = document.getElementById("street-address");
const website = document.getElementById("website");
const companyName = document.getElementById("company-name");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    let int;

    int = randomInteger(0, 10);

    identity.innerHTML = data[int].id;
    userName.innerHTML = data[int].username;
    email.innerHTML = data[int].email;
    streetAddress.innerHTML = data[int].address.street;
    website.innerHTML = data[int].website;
    companyName.innerHTML = data[int].company.name;
  });

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
