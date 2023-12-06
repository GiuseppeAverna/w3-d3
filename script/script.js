const pageform = document.getElementById("main-form");
pageform.addEventListener("submit", function (e) {
  e.preventDefault();
});
const nameinputfield = document.getElementById("firstinput");
console.log(nameinputfield.value);

const tasklist = document.createElement("ul");
tasklist.innerHTML = `
<li> $(nameinputfield.value) </li>
`;
