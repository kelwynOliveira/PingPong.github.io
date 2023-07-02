socialDiv = document.querySelector("#social-div-mobile");

function showHide(el) {
  display = document.querySelector(el);
  display.style.display === "block"
    ? (display.style.display = "none")
    : (display.style.display = "block");
}

function mobileMenu() {
  if (socialDiv.style.display === "flex") {
    socialDiv.style.display = "none";
    document.body.style.overflow = "visible";
  } else {
    socialDiv.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}
