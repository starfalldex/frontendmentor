const form = document.forms[0];

form.onsubmit = (elm) => {
  const input_email = document.querySelector(".inp-email");
  const error_message = document.querySelector(".error-msg");
  const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  elm.preventDefault();
  if (email_pattern.test(input_email.value)) {
    error_message.style.display = "none";
    input_email.classList.remove("error");
    // email submitted to server
    confirm("are you sure");
    console.log("email submitted:-", input_email.value);
    
    input_email.value = "";
} else {
    error_message.style.display = "block";
    input_email.classList.add("error");

    //clear text field
    input_email.value = "";
  }
};
