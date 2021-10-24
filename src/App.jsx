import Sidebar from "./Sidebar";
import IndexRoute from "./routes/Index";
import { render } from "solid-js/web";
import { NavLink, Router, useRoutes } from "solid-app-router";

import "virtual:windi.css";
import "virtual:windi-devtools";

const routes = [
  {
    name: "About me",
    path: "/",
    component: <IndexRoute />,
  },
];

const App = () => {
  const Routes = useRoutes(routes);

  return (
    <div class="bg-light-600 flex">
      <Sidebar routes={routes} />
      <div class="p-20">
        <Routes />
      </div>
    </div>
  );
};

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root")
);
