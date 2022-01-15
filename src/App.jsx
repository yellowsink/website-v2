// dark mode code
window.prefersDark = !!window.matchMedia("(prefers-color-scheme: dark)")
  .matches;

if (
  document.cookie == "dark" ||
  (document.cookie != "light" && window.prefersDark)
)
  document.getElementById("root").className = "dark";

document.getElementById("temp_dark").remove();

// App.jsx main
import { render } from "solid-js/web";
import { Router, useRoutes } from "solid-app-router";

import "virtual:windi.css";
import "virtual:windi-devtools";

import Sidebar from "./Sidebar";
import pagestyles from "./assets/page.sass";

import MarkdownPage from "./components/MarkdownPage";
import IndexRoute from "./routes/Index";
import AccountsRoute from "./routes/Accounts";
import WacomRoute from "./routes/Wacom";
import ModdingIntroRoute from "./routes/ModdingIntro";
import LinuxAudioRoute from "./routes/LinuxAudio";
import PronounsRoute from "./routes/Pronouns";
import WkMadnessRoute from "./routes/WkMadness"

const routes = [
  {
    name: "About me",
    path: "/",
    component: IndexRoute,
  },
  {
    name: "Accounts",
    path: "/accounts",
    component: AccountsRoute,
  },
  {
    name: "Discord plugins",
    path: "/plugins",
    component: MarkdownPage(
      "https://raw.githubusercontent.com/yellowsink/cc-plugins/master/README.md"
    ),
  },
  {
    name: "Discord mod intro",
    path: "/moddingintro",
    component: ModdingIntroRoute,
  },
  {
    name: "Solidown",
    path: "/solidown",
    component: MarkdownPage(
      "https://raw.githubusercontent.com/yellowsink/solidown/master/README.md"
    ),
  },
  {
    name: "Quark",
    path: "/quark",
    component: MarkdownPage(
      "https://raw.githubusercontent.com/yellowsink/quark/master/README.md"
    ),
  },
  {
    name: "Wacom",
    path: "/wacom",
    component: WacomRoute,
  },
  {
    name: "Linux Audio",
    path: "/linux_audio_prod",
    component: LinuxAudioRoute,
  },
  {
    name: "Pronoun Grammar",
    path: "/prounoun_grammar",
    component: PronounsRoute,
  },
  {
    name: "Simian",
    path: "/simian",
    component: MarkdownPage(
      "https://raw.githubusercontent.com/yellowsink/simian/master/README.md"
    ),
  },
  {
    name: "WebKit CSS madness",
    path: "/wkmadness",
    component: WkMadnessRoute
  },
];

const App = () => {
  const Routes = useRoutes(routes);

  return (
    <Router>
      <div class="flex bg-light-600 dark:(bg-dark-400 text-white) transition-colors <md:flex-col min-h-[100vh] font-sans">
        <Sidebar routes={routes} />
        {/* haha root root */}
        <div class="md:ml-100 xl:ml-150 p-18 flex-1" id="route-root">
          <Routes />
          {/* I will mix Windi with standard CSS and you will not stop me */}
          <style>{pagestyles}</style>
        </div>
      </div>
    </Router>
  );
};

render(App, document.getElementById("root"));
