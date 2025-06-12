const form = document.forms[0];

const email_input = document.querySelector("#email");
const error_msg = document.querySelector(".alert-msg"),
  error_image = document.querySelector(".alert-image");

form.onsubmit = (elm) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;
  elm.preventDefault();
  if (emailPattern.test(email_input.value)) {
    error_msg.style.display = "none";
    error_image.style.display = "none";

    // email submitted to server
    confirm("are you sure")
    console.log("email submitted:-", email_input.value);

    email_input.value = "";
    alert("email submitted");
  } else {
    error_msg.style.display = "block";
    error_image.style.display = "block";

    //clear text field
    email_input.value = "";
  }

  //     elm.preventDefault();
  //   const check_value = ["@", "."];
  //   if (!check_value.every(char => email_input.value.includes(char))) {
  //     error_msg.style.display = "block";
  //     error_image.style.display = "block";

  //     //clear text field
  //     email_input.value = "";
  // } else {
  //     error_msg.style.display = "none";
  //     error_image.style.display = "none";

  //     // email submitted to server
  //     console.log("email submitted:-", email_input.value);

  //     email_input.value = "";
  //     alert("email submitted");
  //   }
};
