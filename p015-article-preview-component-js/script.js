document.body.addEventListener("click", (elm) => {
    const open_close = document.querySelector(".link-wrapper").classList;
  if (elm.target.classList == "open-close") {
    open_close.toggle("display-visible");
  } else {
    open_close.remove("display-visible");
  }
});
