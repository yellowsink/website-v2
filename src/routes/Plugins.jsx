export default () => (
  <>
    <h2 class="text-3xl">Plugins</h2>
    <iframe
      id="pluginframe"
      class="mt-4 w-full h-full overflow-visible"
      src="https://yellowsink.github.io/cc-plugins"
    />

    <style>
      {`.dark #pluginframe { filter: invert() }`}
    </style>
  </>
);
