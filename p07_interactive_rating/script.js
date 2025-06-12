var rating_number = document.querySelectorAll(".rating");
var no_of_star = 0;
rating_number.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("rating-click")) {
      element.classList.remove("rating-click");
      no_of_star = 0;
    } else {
      rating_number.forEach((e) => e.classList.remove("rating-click"));
      element.classList.add("rating-click");
      no_of_star = element.innerText;
    }
  });
});

var submit = document.querySelector(".button-submit");
submit.addEventListener("click",()=> {
    document.querySelector(".before-rate-content").remove();
    document.querySelector(".after-rate-content").classList.remove("visibility-hidden");
    document.querySelector(".n-star").innerText = no_of_star;
})
