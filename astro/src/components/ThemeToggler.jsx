import dark from "../../public/dark.svg";
import light from "../../public/light.svg";

export default () => (
  <div id="theme-toggler" class="flex mb-10 self-center">
    <div class="imgwrapper">
      <img src={light} />
      <img src={light} />
    </div>

    <button
      onClick={() => {
        let root = document.getElementById("root");
        let newIsDark = !(root.classList == "dark");
        if (window.prefersDark == newIsDark) document.cookie = "detect";
        else if (newIsDark) document.cookie = "dark";
        else document.cookie = "light";

        root.classList = newIsDark ? "dark" : "";
      }}
    >
      <div />
    </button>

    <div class="imgwrapper">
      <img src={dark} />
      <img src={dark} />
    </div>
  </div>
);
