import markdowncss from "../assets/markdown.css";
import Solidown from "solidown"

export default () => (
  <Solidown
    src="https://raw.githubusercontent.com/yellowsink/cc-plugins/master/README.md"
    css={markdowncss}
    loading={
      <div class="text-center mt-20 text-6xl font-mono font-thin">
        Loading MD...
      </div>
    }
  />
);
