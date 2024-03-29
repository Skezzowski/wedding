import styled from "styled-components";

const RsvpContainer = styled('div')`
  width: 100%;
  height: 100vh;
  align-items: center;
  overflow: auto;
  justify-content: center;
  padding-top: 8rem;
`

const Rsvp = () => {
  return (
    <RsvpContainer>
      <iframe title=" " src="https://docs.google.com/forms/d/e/1FAIpQLSfA-h9M-IXXSmIJ3mkam5thhyH1-aX65OoJPVQTF72m8OOOyg/viewform?embedded=true"
       width="100%" height="100%" frameBorder="0">
          Loading…
      </iframe>
    </RsvpContainer>
  );
};

export default Rsvp;
