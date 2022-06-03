// I pratice project from Chris Coyier

// theme color from localStorage
document.documentElement.style.setProperty("--primary-color", localStorage.getItem("userThemeColor"));

var colorInput = document.querySelector("#choose-theme-color");

colorInput.addEventListener("change", function() {
  document.documentElement.style.setProperty("--primary-color", this.value);
  localStorage.setItem("UserThemeColor", this.value);
});