import { lazy } from "react";
import AboutContent from "../../content/AboutContent.json";

const Container = lazy(() => import("../../common/Container"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Arrival = () => {
  return (
    <Container>
      Arrival
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
    </Container>
  );
};

export default Arrival;
