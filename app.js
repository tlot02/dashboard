let array = [];
const form = document.getElementById("form");

function logInfo() {
  const name = document.getElementById("name").value;
  const zipCode = document.getElementById("zipCode").value;
  array.push({
    name: name,
    zipCode: zipCode,
  });
  console.log(array);
}

form.addEventListener("submit", logInfo);
