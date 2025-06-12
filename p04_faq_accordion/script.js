var faq_ques_wrapper = document.querySelector(".faq-question-wrapper");
faq_ques_wrapper.addEventListener("click", (elm) => {
  var answer = elm.target.closest(".question-answer-wrapper").querySelector(".answer"),
    plus_icon = elm.target.closest(".question-answer-wrapper").querySelector(".plus-icon");
  if (answer.classList.toggle("toggle-answer")) {
    plus_icon.src = "assets/images/icon-minus.svg";
  } else {
    plus_icon.src = "assets/images/icon-plus.svg";
  }
});
