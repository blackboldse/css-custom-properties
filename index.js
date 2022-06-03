// I pratice project from Chris Coyier

// theme color from localStorage
document.documentElement.style.setProperty("--clr-primary", localStorage.getItem("userThemeColor"));

const colorInput = document.querySelector("#choose-theme-color");

colorInput.addEventListener("change", function() {
  document.documentElement.style.setProperty("--clr-primary", this.value);
  localStorage.setItem("userThemeColor", this.value);
});