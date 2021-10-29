import { createResource, createSignal } from "solid-js";
import marked from "marked";
import markdowncss from "../assets/markdown.css";

const sourceUrl =
  "https://raw.githubusercontent.com/yellowsink/cc-plugins/master/README.md";

const getMarkdownSource = async () => await (await fetch(sourceUrl)).text();

export default () => {
  const [fetchSignal, setFetchSignal] = createSignal();
  const [markdown] = createResource(fetchSignal, getMarkdownSource);
  setFetchSignal(0);

  return (
    <>
      {markdown() ? (
        <div innerHTML={marked(markdown())} id="markdown-container" />
      ) : (
        <div class="text-center mt-20 text-6xl font-mono font-thin">
          Loading MD...
        </div>
      )}

      <style>{markdowncss}</style>
    </>
  );
};
