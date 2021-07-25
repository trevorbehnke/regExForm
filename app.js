// Form Blur Event Listeners
document.getElementById("name").addEventListener("keyup", validateName);
document.getElementById("zip").addEventListener("keyup", validateZip);
document.getElementById("email").addEventListener("keyup", validateEmail);
document.getElementById("phone").addEventListener("keyup", validatePhone);

// Validation Functions
function validateName() {
  const name = document.getElementById("name");
  const re = /^[a-zA-Z]{2,10}$/;

  // If it's true that our test fails, add the invalid class
  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
    // If test passes, remove the class
  } else {
    name.classList.remove("is-invalid");
  }
}
function validateZip() {
  const zip = document.getElementById("zip");
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  // If it's true that our test fails, add the invalid class
  if (!re.test(zip.value)) {
    zip.classList.add("is-invalid");
    // If test passes, remove the class
  } else {
    zip.classList.remove("is-invalid");
  }
}
function validateEmail() {
  const email = document.getElementById("email");
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  // If it's true that our test fails, add the invalid class
  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
    // If test passes, remove the class
  } else {
    email.classList.remove("is-invalid");
  }
}
function validatePhone() {
  const phone = document.getElementById("phone");
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  // If it's true that our test fails, add the invalid class
  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
    // If test passes, remove the class
  } else {
    phone.classList.remove("is-invalid");
  }
}
