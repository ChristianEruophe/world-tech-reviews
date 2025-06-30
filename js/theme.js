console.log("theme.js loaded");
console.log(document.getElementById("themeSelect")); // should log null or the element

window.addEventListener("DOMContentLoaded", () => {
  const themeSelect = document.getElementById("themeSelect");
  if (!themeSelect) return;

  function applyTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else if (theme === "light") {
      document.body.classList.remove("dark-mode");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    }
  }

  themeSelect.addEventListener("change", () => {
    const selectedTheme = themeSelect.value;
    localStorage.setItem("theme", selectedTheme);
    applyTheme(selectedTheme);
  });

  const savedTheme = localStorage.getItem("theme") || "system";
  themeSelect.value = savedTheme;
  applyTheme(savedTheme);

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (themeSelect.value === "system") {
      applyTheme("system");
    }
  });
});

