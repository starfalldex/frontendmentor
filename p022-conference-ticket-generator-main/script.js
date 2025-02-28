const getAvatar =document.querySelector("#get-avatar");

// change on image
getAvatar.addEventListener("change", function () {
    const file = this.files[0]; // Get the selected file
    const avatarSelect = document.querySelector(".info-file");
    const avatarPara = document.querySelector(".info-file p");
    const avatarPreview = document.querySelector(".upload-file img");

    if (file) {
        const validTypes = ["image/jpeg", "image/png"];
        const maxSize = 500 * 1024; // 500KB

        if (!validTypes.includes(file.type)) {
            avatarSelect.classList.add("error-visible");
            avatarPara.textContent = "Invalid file type! Only JPEG or PNG are allowed.";
        } else if (file.size > maxSize) {
            avatarSelect.classList.add("error-visible");
            avatarPara.textContent = "File size exceeds 500KB.";
        } else {
            avatarSelect.classList.remove("error-visible");
            // Set image preview
            avatarPreview.src = URL.createObjectURL(file);
        }
    }
});

//form on submit
document.querySelector("#form-1").addEventListener("submit", function (element) {
    element.preventDefault();

    const formData = {
        name: this.name.value.trim(),
        email: this.email.value.trim(),
        username: this.username.value.trim(),
        avatarFile: this.avatar.files[0]
    };
    //1
    let isValid = validateInputs(formData);
    //2
    if (isValid) {
    changeHTMLcontent(formData);

    }
})


// 1 validate all
function validateInputs(formData) {
    let isValid = true;
    const errorsMsg = document.querySelectorAll(".error-msg");
    // Name validation
    if (!/^[A-Za-z\d][A-Za-z\d.'-]{0,29}$/.test(formData.name)) {
        errorsMsg[0].classList.add("error-visible")
        isValid = false;
    } else errorsMsg[0].classList.remove("error-visible")

    // Email validation
    if (!/^[a-zA-Z\d.%+-]+@[a-zA-Z\d-]+(?:\.[a-zA-Z\d-]+)*\.[a-zA-Z]{2,10}$/.test(formData.email)) {
        errorsMsg[1].classList.add("error-visible")
        isValid = false;
    } else errorsMsg[1].classList.remove("error-visible")

    // Username validation
    if (!/^[a-zA-Z0-9_]{3,20}$/.test(formData.username)) {
        errorsMsg[2].classList.add("error-visible")
        isValid = false;
    } else errorsMsg[2].classList.remove("error-visible")

    //check file upload
    if (!formData.avatarFile) {
        const avatarSelect = document.querySelector(".info-file");
        const avatarPara = document.querySelector(".info-file p");
        avatarSelect.classList.add("error-visible");
        avatarPara.textContent = "Please upload a file.";
        isValid = false;
    }
    return isValid;
}

// step 2
function changeHTMLcontent(formData) {

    const generatedTicket = `
<div class="description-wrapper">
  <p>Congrats, Jonatan! Your ticket is ready</p>
  <p>
    We've emailed your ticket to <span>${formData.email}</span> and will send updates in the run up to the event.
  </p>
</div>

<div class="gen-ticket">
  
  <div class="ticket-img-wrap">
    <img src="assets/images/pattern-ticket.svg" alt="">
  </div>

  <div class="ticket-content-wrap">

    <div class="content-left">
      <div class="left-top">
        <img src="assets/images/logo-mark.svg" alt="">
        <div>
          <p class="title"> Coding Conf </p>
          <p class="address-date"> ${getFutureDate()} / Austin, TX </p>
        </div>
      </div>

      <div class="left-bottom">
        <img src="${URL.createObjectURL(formData.avatarFile)}" alt="">
        <div class="profile-detail">
          <p class="name">${formData.name}</p>
          <div>
            <img src="assets/images/icon-github.svg" alt="">
            <p class="username">@${formData.username}</p>
          </div>
        </div>
      </div>

    </div>

    <div class="content-right">
      <p>#${randomTicket()}</p>
    </div>
  </div>
</div>`;

    document.querySelector(".content").innerHTML = generatedTicket;
}
function getFutureDate() {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 15);

    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return futureDate.toLocaleDateString('en-US', options);
}
function randomTicket() {
    var number = Math.floor(Math.random() * 100000000);
    return number;
}




