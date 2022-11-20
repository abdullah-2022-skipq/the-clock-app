/**
 * 
 * 
 * 
 * 












































 */
const themeSwitch = document.getElementById("theme-switch");

localStorage.setItem("themeMode", "light");

themeSwitch.addEventListener("click", (e) => {
  let theme = localStorage.getItem("theme-switch");

  if (theme == "light" || theme == "") {
    document.documentElement.setAttribute("data-themeMode", "dark");
    localStorage.setItem("themeMode", "dark");
  } else {
    document.documentElement.removeAttribute("data-themeMode");
    localStorage.setItem("themeMode", "light");
  }
});
