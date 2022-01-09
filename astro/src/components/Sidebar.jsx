export default ({ routes, currentPath }) => {
  return (
    <div id="sidebar">
      {/* <ThemeToggler /> */}

      <h1 class="text-4xl text-center font-thin">sink's place</h1>
      <h2 class="font-bold mb-4 mt-10 text-xl">Pages:</h2>
      <ul class="text-lg italic mb-10">
        {routes.map((route) => (
          <li>
            <a
              class={`text-black dark:text-white no-underline hover:pl-4 transition-all ${
                route.path === currentPath ? "active" : ""
              }`}
              href={route.path}
            >
              {route.name}
            </a>
          </li>
        ))}
      </ul>

      <div style="flex: 1" />

      <p id="sbar_bottomtext" class="-m-14 mt-0 text-right text-sm">
        Made with Astro, Solid, and VSCode
      </p>

      {/* forgive me for css but solid app router go brr */}
      <style>{".active { margin-left: 2rem; }"}</style>
    </div>
  );
};
