export default () => (
  <>
    <h2 class="text-3xl">Plugins</h2>
    <iframe
      id="pluginframe"
      class="mt-6 w-full min-h-full <md:min-h-[85vh] overflow-visible"
      /* i know this is very against the point of Windi,
          but fr there is a limit to what atomic CSS frameworks
          can do while retaining my will to live
        */
      style={{
        "box-shadow":
          "-.5rem -.5rem 1rem white, .5rem .5rem 1rem white, .5rem -.5rem 1rem white, -.5rem .5rem 1rem white",
      }}
      src="https://yellowsink.github.io/cc-plugins"
    />

    <style>{`.dark #pluginframe { filter: invert() }`}</style>
  </>
);
