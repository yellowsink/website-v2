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
  let newIsDark = !(root.className == "dark");
  if (prefersDark() == newIsDark) document.cookie = "detect";
  else if (newIsDark) document.cookie = "dark; Path=/";
  else document.cookie = "light; Path=/";

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
