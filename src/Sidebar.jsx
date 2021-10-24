import { NavLink } from "solid-app-router";
import ThemeToggler from "./ThemeToggler";

export default ({ routes }) => {
  return (
    <div class="p-20 pt-5 w-auto md:(h-[100vh] w-100) xl:w-150 bg-light-200 dark:bg-dark-800 shadow-lg font-mono transition-colors">
      <div class="flex justify-center">
        <ThemeToggler />
      </div>

      <h1 class="text-4xl text-center font-thin">sink's place</h1>
      <h2 class="font-bold mb-4 mt-10 text-xl">Pages:</h2>
      <ul class="text-lg italic">
        {routes.map((route) => (
          <li>
            <NavLink
              class="text-black dark:text-white underline-transparent hover:pl-4 transition-all"
              href={route.path}
              end
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* forgive me for css but solid app router go brr */}
      <style>{".active { margin-left: 2rem; }"}</style>
    </div>
  );
};
