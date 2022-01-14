import dark from "../../public/dark.svg";
import light from "../../public/light.svg";

export default () => (
  <div class="flex mb-10 self-center">
    <img src={light} class="dark:(filter invert)" />

    <button
      class="w-12 h-6 rounded-full bg-dark-800 dark:bg-dark-50 mx-2 flex items-center"
      onClick={() => {
        let root = document.getElementById("root");
        let newIsDark = !(root.classList == "dark");
        if (window.prefersDark == newIsDark) document.cookie = "detect";
        else if (newIsDark) document.cookie = "dark";
        else document.cookie = "light";

        root.classList = newIsDark ? "dark" : "";
      }}
    >
      <div class="w-4 h-4 rounded-full bg-light-500 mx-1 dark:ml-7 transition-all" />
    </button>

    <img src={dark} class="dark:(filter invert)" />
  </div>
);
