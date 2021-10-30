import { Link } from "solid-app-router";

export default () => (
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
      Please note that this label is not rendered by, nor part of Solidown, but there to
      inform that these specific pages are indeed rendered by Solidown
    </div>
  </div>
);
