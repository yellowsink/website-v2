import markdowncss from "../assets/markdown.css";
import Solidown from "solidown";
import SolidownLoading from "../components/SolidownLoading";
import PoweredBySolidown from "../components/PoweredBySolidown";

export default () => (
  <>
    <Solidown
      src="https://raw.githubusercontent.com/yellowsink/cc-plugins/master/README.md"
      css={markdowncss}
      loading={<SolidownLoading />}
    />
    <PoweredBySolidown />
  </>
);
