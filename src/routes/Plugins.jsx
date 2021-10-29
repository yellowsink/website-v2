import { createResource, createSignal } from "solid-js";
import marked from "marked";
import { Dynamic } from "solid-js/web";

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
        <div class="text-center mt-20 text-6xl font-mono font-thin">Loading MD...</div>
      )}

      <style>
        {`

        #markdown-container h1 {
          /* equivalent to text-3xl */
          font-size: 1.875rem;
          line-height: 2.25rem;
        }

        #markdown-container h2 {
          /* equivalent to text-2xl */
          font-size: 1.5rem;
          line-height: 2rem;
          /* equivalent to mt-6 */
          margin-top: 1.5rem;
        }

        #markdown-container p {
          /* equivalent to mt-4 */
          margin-top: 1rem;
        }

        #markdown-container img {
          /* equivalent to h-12 */
          height: 3rem;
          /* equivalent to my-4 */
          margin: 1rem 0;
        }

        #markdown-container a {
          /* equivalent to text-blue-400 */
          color: #60A5FA;
        }
      `}
      </style>
    </>
  );
};
