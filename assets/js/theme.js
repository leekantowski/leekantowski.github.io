(() => {
  const root = document.documentElement;
  const button = document.querySelector("[data-theme-toggle]");
  const label = document.querySelector("[data-theme-label]");
  const storageKey = "lee-kantowski-theme";
  const systemPreference = window.matchMedia("(prefers-color-scheme: dark)");

  let savedTheme = null;
  try {
    savedTheme = window.localStorage.getItem(storageKey);
  } catch {
    // The theme toggle still works when browser storage is unavailable.
  }

  const applyTheme = (theme, save = false) => {
    root.dataset.theme = theme;

    if (button && label) {
      const isDark = theme === "dark";
      button.setAttribute("aria-pressed", String(isDark));
      button.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
      label.textContent = isDark ? "Light theme" : "Dark theme";
    }

    if (save) {
      try {
        window.localStorage.setItem(storageKey, theme);
      } catch {
        // The selected theme applies for this page even if storage is unavailable.
      }
    }
  };

  const initialTheme =
    savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : systemPreference.matches
        ? "dark"
        : "light";

  applyTheme(initialTheme);

  if (button) {
    button.addEventListener("click", () => {
      applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
    });
  }
})();
