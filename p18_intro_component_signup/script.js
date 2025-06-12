var is_error = false;
function data_validate(element) {
  const data = element.target;
  const data_value = data.value;

  if (data.type == "text") {
    if (data.name == "first_name" || data.name == "last_name") {
      const validate = validateFirstName(data_value.trim());
      element_ui_update(data, validate);
    }
  }
  if (data.type == "email") {
    const validate = validateEmail(data_value.trim());
    element_ui_update(data, validate);
  }
  if (data.type == "password") {
    const validate = validatePassword(data_value);
    element_ui_update(data, validate);
  }
}
function validateFirstName(name) {
  const firstNameRegex = /^[A-Za-z\d][A-Za-z\d.'-]{0,29}$/;
  return firstNameRegex.test(name);
}
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z\d.%+-]+@[a-zA-Z\d-]+(?:\.[a-zA-Z\d-]+)*\.[a-zA-Z]{2,10}$/;
  return emailRegex.test(email);
}
function validatePassword(password) {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,30}$/;
  return passwordRegex.test(password);
}

function element_ui_update(data, status) {
  const data_parent = data.parentElement;
  if (status) {
    if (data.nextElementSibling.classList.contains("error-toggle")) {
      data.nextElementSibling.classList.remove("error-toggle");
      data_parent.nextElementSibling.classList.remove("error-toggle");
      is_error = false;
    }
  } else if (!data.nextElementSibling.classList.contains("error-toggle")) {
    data.nextElementSibling.classList.add("error-toggle");
    data_parent.nextElementSibling.classList.add("error-toggle");
    is_error = true;
  }
}

function submit_form(element) {
  element.preventDefault();
  var is_empty_form = 0;
  console.log(element);
  for (var i = 0; i < 4; i++) {
   if(element.target[i].value === ""){
    is_empty_form++;
   }
  }

  if (!is_error && !is_empty_form) {
    alert("submited");
  } else {
    alert("fix - error or Empty form ");
  }
}
