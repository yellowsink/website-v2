import dark from "./assets/dark.svg";
import light from "./assets/light.svg";

export default () => (
  <div class="flex mb-10 self-center">
    <img src={dark} class="dark:(filter invert)" />

    <button
      class="w-12 h-6 rounded-full bg-dark-800 dark:bg-dark-50 mx-2 flex items-center"
      onClick={() => {
        let root = document.getElementById("root");
        document.cookie = root.classList == "" ? "dark" : "light"
        root.classList = root.classList == "" ? "dark" : "";
      }}
    >
      <div class="w-4 h-4 rounded-full bg-light-500 mx-1 dark:ml-7 transition-all" />
    </button>

    <img src={light} class="dark:(filter invert)" />
  </div>
);
