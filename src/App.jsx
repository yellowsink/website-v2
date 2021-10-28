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
import { NavLink, Router, useRoutes } from "solid-app-router";

import "virtual:windi.css";
import "virtual:windi-devtools";

import Sidebar from "./Sidebar";

import IndexRoute from "./routes/Index";
import AccountsRoute from "./routes/Accounts";
import PluginsRoute from "./routes/Plugins";

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
    component: PluginsRoute
  }
];

const App = () => {
  const Routes = useRoutes(routes);

  return (
    <Router>
      <div class="flex bg-light-600 dark:(bg-dark-400 text-white) transition-colors <md:flex-col min-h-[100vh]">
        <Sidebar routes={routes} />
        <div class="md:ml-100 xl:ml-150 p-18 flex-1">
          <Routes />
        </div>
      </div>
    </Router>
  );
};

render(App, document.getElementById("root"));
