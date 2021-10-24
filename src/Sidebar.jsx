import { NavLink } from "solid-app-router";
import ThemeToggler from "./ThemeToggler";

export default ({ routes }) => {
  return (
    <div class="flex flex-col p-20 pt-5 w-auto md:(h-[100vh] w-100 fixed) xl:w-150 bg-light-200 dark:bg-dark-800 transition-colors shadow-lg font-mono">
      <ThemeToggler />

      <h1 class="text-4xl text-center font-thin">sink's place</h1>
      <h2 class="font-bold mb-4 mt-10 text-xl">Pages:</h2>
      <ul class="text-lg italic mb-10">
        {routes.map((route) => (
          <li>
            <NavLink
              class="text-black dark:text-white no-underline hover:pl-4 transition-all"
              href={route.path}
              end
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <div class="flex-1" />

      <p class="-m-14 mt-0 text-right text-sm">Made with Solid, Windi, and VSCode</p>

      {/* forgive me for css but solid app router go brr */}
      <style>{".active { margin-left: 2rem; }"}</style>
    </div>
  );
};
