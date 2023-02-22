import { lazy } from "react";
import styled from "styled-components";
import AboutContent from "../../content/AboutContent.json";

const Container = lazy(() => import("../../common/Container"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const RsvpContainer = styled('div')`
  width: 100%;
  height: 150vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8rem;
`

const Rsvp = () => {
  return (
    <RsvpContainer>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfA-h9M-IXXSmIJ3mkam5thhyH1-aX65OoJPVQTF72m8OOOyg/viewform?embedded=true" width="100%" height="100%" frameBorder="0">
          Loading…
      </iframe>
    </RsvpContainer>
  );
};

export default Rsvp;
