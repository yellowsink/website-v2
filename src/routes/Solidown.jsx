import markdowncss from "../assets/markdown.css";
import Solidown from "solidown";
import SolidownLoading from "../components/SolidownLoading";

export default () => {
  return (
      <Solidown
        src="https://raw.githubusercontent.com/yellowsink/solidown/master/README.md"
        css={markdowncss}
        loading={<SolidownLoading />}
      />
  );
};
