import markdowncss from "../assets/markdown.css";
import Solidown from "solidown";
import { Link } from "solid-app-router";

const SolidownLoading = () => (
  <div class="text-center mt-20 text-6xl font-mono font-thin">
    Loading MD...
  </div>
);

const PoweredBySolidown = () => (
  <div class="flex flex-col">
    <div
      class="font-mono italic pl-4 pt-2 mt-6 border border-current border-b-transparent border-r-transparent transition-color w-max ml-auto"
      style={{ "border-top-left-radius": "1rem" }}
    >
      Rendered by{" "}
      <Link href="/solidown" class="font-bold text-blue-400">
        Solidown
      </Link>
    </div>
    <div class="italic text-right mt-2">
      Please note that this label is not rendered by, nor part of Solidown, but
      there to inform that these specific pages are indeed rendered by Solidown
    </div>
  </div>
);

export default (src) => () =>
  (
    <div id="md-page-wrapper">
      <Solidown src={src} css={markdowncss} loading={<SolidownLoading />} />
      {/* <PoweredBySolidown /> */}
    </div>
  );
