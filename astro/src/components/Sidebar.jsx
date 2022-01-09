export default ({ routes, currentPath }) => {
  return (
    <div id="sidebar">
      {/* <ThemeToggler /> */}

      <h1>sink's place</h1>
      <h2>Pages:</h2>
      <ul>
        {routes.map((route) => (
          <li>
            <a
              class={route.path === currentPath ? "active" : ""}
              href={route.path}
            >
              {route.name}
            </a>
          </li>
        ))}
      </ul>

      <div style="flex: 1" />

      <p id="sbar_bottomtext">Made with Astro, Solid, and VSCode</p>
    </div>
  );
};
