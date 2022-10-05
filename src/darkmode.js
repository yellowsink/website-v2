const prefersDark = () =>
  !!window.matchMedia("(prefers-color-scheme: dark)").matches;
const root = document.getElementById("root");

const applyStyles = () =>
  (root.className =
    document.cookie.split("; ").includes("dark") ||
    (!document.cookie.split("; ").includes("light") && prefersDark())
      ? "dark"
      : "");

export const toggleTheme = () => {
  let newIsDark = !(root.classList == "dark");
  if (prefersDark() == newIsDark) document.cookie = "detect";
  else if (newIsDark) document.cookie = "dark";
  else document.cookie = "light";

  applyStyles();
};

// page load
applyStyles();

document.getElementById("temp_dark").firstElementChild.remove();
setTimeout(() => {
  document.getElementById("temp_dark").remove();
}, 100);

// detect cookie moment
setInterval(applyStyles, 500);