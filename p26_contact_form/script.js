const contactForm = document.querySelector("#form1");
let submitForm = true;
contactForm.addEventListener("change", (elm) => {
    const curElm = elm.target;
    const curElmVal = curElm.value.trim();
    const fieldset = curElm.closest("fieldset").id
    let errorMsg = "";

    if (fieldset === "fieldset-fullName") {
        errorMsg = validateName(curElmVal);
        errorShow(curElm.nextElementSibling, errorMsg);

    } else if (fieldset === "fieldset-email") {
        errorMsg = validateEmail(curElmVal);
        errorShow(curElm.nextElementSibling, errorMsg);

    }
});
function validateName(name) {
    const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
    if (!name) {
        return "This field is required.";
    }
    if (!namePattern.test(name)) {
        return "Only letters - ' are allowed.";
    }
    if (name.length < 2 || name.length > 50) {
        return "Must be between 2 and 50 characters long.";
    }
    return "noError";
}
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
        return "Email is required.";
    }
    if (!emailPattern.test(email)) {
        return "Enter a valid email address.";
    }
    return "noError";
}
function validateTextarea(text, minLength = 2, maxLength = 500) {
    if (!text) {
        return "This field is required.";
    }
    if (text.length < minLength) {
        return `message must be at least ${minLength} characters long.`;
    }
    if (text.length > maxLength) {
        return `message cannot exceed ${maxLength} characters.`;
    }
    return "noError";
}

// error Show
function errorShow(elm, error = "error", changeText = true) {
    if (error !== 'noError') {
        elm.classList.add("e-msg-visible")
        if (changeText) elm.innerText = error;
        return false;
    } else if (error === 'noError') {
        elm.classList.remove("e-msg-visible")
        return true;
    }
}

contactForm.addEventListener("submit", (elm) => {
    elm.preventDefault();
    const formData = {
        name: elm.target.firstName.value.trim() + " " + elm.target.lastName.value.trim(),
        email: elm.target.email.value.trim(),
        query: elm.target.queryType.value,
        message: elm.target.message.value.trim()
    }

    const emailElm = document.querySelector("#fieldset-email .e-msg");
    const radioElm = document.querySelector("#fieldset-queryType .e-msg");
    const msgElm = document.querySelector("#fieldset-message .e-msg");
    const checkElm = document.querySelector("#fieldset-consent .e-msg");



    let curElm = elm.target.firstName;
    submitForm = errorShow(curElm.nextElementSibling, validateName(curElm.value.trim()));
    curElm = elm.target.lastName;
    submitForm = errorShow(curElm.nextElementSibling, validateName(curElm.value.trim()));

    submitForm = errorShow(emailElm, validateEmail(contactForm.email.value.trim()));
    submitForm = errorShow(msgElm, validateTextarea(contactForm.message.value.trim()));


    if (contactForm.queryType.value) errorShow(radioElm, "noError")
    else errorShow(radioElm, "error", false);

    if (contactForm.checkbox.checked) submitForm = errorShow(checkElm, "noError")
    else { submitform = errorShow(checkElm, "error", false); }

    if (submitForm) {
        elm.target.reset();
        let formSubmittedPopup = document.createElement("div");
        document.body.appendChild(formSubmittedPopup);
        formSubmittedPopup.classList.add("form-submited", "flex");
        formSubmittedPopup.innerHTML = `    
        <img src="./images/icon-success-check.svg" alt="">
        <p>Thanks for completing the form. We'll be in touch soon!</p>
        `;
        setTimeout(() => {
            formSubmittedPopup.remove();
        }, 3000);
    }

})