import { fixedEl, burgerMenu, createSwiper, tags } from "./global.js";
//
tags("G-2NZ3YBL2DC");
// burger
burgerMenu(".burger", ".nav__menu");
// fixed nav
fixedEl("nav", "1");
//
const workSwiper = createSwiper(".swiper-container");
workSwiper.params.spaceBetween = 30;
//
if (document.querySelector(".formvalid")) {
  let forms = document.querySelectorAll(".formvalid");
  for (let i = 0; i < forms.length; i++) {
    const submit = forms[i].querySelector("button");
    submit.addEventListener("click", validate);
    function validate(e) {
      e.preventDefault();
      let inputs = forms[i].querySelectorAll("input");
      let textareas = forms[i].querySelectorAll("textarea");
      let valid = true;
      for (let a = 0; a < inputs.length; a++) {
        let input = inputs[a];
        if (!input.value) {
          input.classList.add("invalid");
        } else {
          input.classList.remove("invalid");
        }
      }
      for (let a = 0; a < textareas.length; a++) {
        let textarea = textareas[a];
        if (!textarea.value) {
          textarea.classList.add("invalid");
        } else {
          textarea.classList.remove("invalid");
        }
      }
      return valid;
    }
  }
}
