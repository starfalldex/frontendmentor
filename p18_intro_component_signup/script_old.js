function on_change(ev) {
  const data = ev.target;

  if (data.value.length >= 2) {
    if (data.type == "text") {
      if (data.name == "first_name") {
        console.log("first name yes");
        const validate = true;
        if (validate) {
          element_ui_update(data, validate);
        } else {
            element_ui_update(data, validate);
          toggleError(data); // add error class based on element (data)
        }
      }
      if (data.name == "last_name") {
        console.log("last name yes");
      }
    }
  } else {
    element_ui_update(data, false);
  }
}

function element_ui_update(elm, status) {
  const parent = elm.parentElement;

  if (status) {
    if (!elm.nextElementSibling.classList.contains("error-toggle")) {
      elm.nextElementSibling.classList.add("error-toggle");
    }
    if (!parent.nextElementSibling.classList.contains("error-toggle")) {
      parent.nextElementSibling.classList.add("error-toggle");
    }
  }
  else{
    if (elm.classList.contains("input-detail")) {
        elm.nextElementSibling.classList.remove("error-toggle");
        parent.nextElementSibling.classList.remove("error-toggle");
      }
  }
}
