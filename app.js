var icon = document.getElementById("icon").getElementsByTagName("i")[0];
var themes = ["light-theme", "custom-theme", "dark-theme"];
var currentThemeIndex = 0;

icon.parentNode.onclick = function() {
  document.body.classList.remove(themes[currentThemeIndex]);
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  document.body.classList.add(themes[currentThemeIndex]);
  
  if (currentThemeIndex === 0) {
    icon.classList.remove("uil-palette", "uil-moon");
    icon.classList.add("uil-sun");
  } else if (currentThemeIndex === 1) {
    icon.classList.remove("uil-sun", "uil-moon");
    icon.classList.add("uil-palette");
  } else {
    icon.classList.remove("uil-sun", "uil-palette");
    icon.classList.add("uil-moon");
  }
}