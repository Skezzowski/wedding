import { Col, Row } from "antd";
import { lazy } from "react";
import { Slide } from "react-awesome-reveal";
import styled from "styled-components";
import { BlockWithMapSection } from "../../components/BlockWithMap/styles";

const Container = lazy(() => import("../../common/Container"));

export const MainContentContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 3rem;

  @media screen and (max-width: 1024px) {
    padding-top: 3.7rem;
  }
`;

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 3.5rem 0 3rem;
  display: flex;

  @media screen and (max-width: 1024px) {
    padding: 3.5rem 0 3rem;
  }
`;

export const TextParagraph = styled("div")`
  padding: 1rem;
`;

const RsvpContainer = styled('div')`
  align-items: center;
  justify-content: center;
  padding-top: 8rem;
  display: flex;
  width: 100%;

  height: 1600px;

  @media only screen and (max-width: 1024px) {
    height: 1700px;
  }

  @media only screen and (max-width: 768px) {
    height: 1800px;
  }

  @media only screen and (max-width: 414px) {
    height: 1900px;
  }

  flex-direction: column;
  overflow: hidden;
`


const Information = () => {
  return (
    <MainContentContainer>
      <img src="/img/izlandkiss7.png" width={"100%"} alt="" />

      <Container>
        <Slide direction="left">
          <TextParagraph style={{ textAlign: "center" }} id="intro">
            <h6>
              Összeházasodunk!
            </h6>
            <p>
              Kedves Családunk és Barátaink, ezt a weboldalt azért hoztuk létre, hogy minden fontos információt könnyedén megtaláljatok.
            </p>
            <p>
              Szeretettel várunk benneteket a <b>Lósi Majorban 2023.09.23-án</b>
            </p>
            <p>
              Kérünk titeket, hogy minél előbb jelezzetek vissza a jobb felső sarokban található menüpont segítségével!
            </p>
          </TextParagraph>
        </Slide>

        <BlockWithMapSection>
          <Row justify="center" align="middle" id="place">
            <Col lg={8} md={8} sm={24} xs={24} >
              <Slide direction="left">
                <div>
                  <h6>
                    Helyszín
                  </h6>
                  <p>
                    Az esküvő helyszíne a <b>Lósi Major</b>.<br />
                    <b>Cím</b>: 2621 Verőce, Lósi völgy út 1.<br />
                    <b>Koordináták</b>: É47,82867   K19,05899<br />
                    <u><a href="https://goo.gl/maps/9rt182Qe58xCHCoM8">Google Maps Link</a></u>
                  </p>
                  <p>
                    Mivel a telek nagy része a miénk erre a kis időre, így a vállalkozó szellemüek akár <b>sátorral </b> vagy <b>lakókocsival</b> is érkezhetnek!
                  </p>
                </div>
              </Slide>
            </Col>
            <Col lg={16} md={16} sm={24} xs={24}>
              <Slide direction="right">
                <div style={{ height: '32rem', flex: 1, flexGrow: 2, minWidth: '60%' }}>
                  <iframe title="Szállás Térkép" src="https://www.google.com/maps/d/u/0/embed?mid=10yBO2wGA57re8MVqKxJv2thTHq-oVFU&ehbc=2E312F" width="100%" height="100%"></iframe>
                </div>
              </Slide>
            </Col>
          </Row>
        </BlockWithMapSection>

        <BlockWithMapSection>
          <Row justify="center" align="middle" id="accomodation">
            <Col lg={8} md={8} sm={24} xs={24}>
              <Slide direction="left">
                <div>
                  <h6>Szállások</h6>
                  <p>
                    Ezen a térképen találhatóak a Lósi Major közelében lévő szállások, melyek közül szabadon választhattok. <br />
                    <br />
                    Ha szükség van segítségre, keressetek minket bizalommal! :)
                  </p>
                </div>
              </Slide>
            </Col>
            <Col lg={16} md={16} sm={24} xs={24}>
              <Slide direction="right">
                <div style={{ height: '32rem', flex: 1, flexGrow: 2, minWidth: '60%' }}>
                  <iframe title="Szállás Térkép" src="https://www.google.com/maps/d/u/0/embed?mid=1w4Nwq7g59TZhaBJqWzv1tV49Ia9TJiMZ" width="100%" height="100%"></iframe>
                </div>
              </Slide>
            </Col>
          </Row>
        </BlockWithMapSection>

        <Slide direction="left">
          <TextParagraph id="goodToKnow" >
            <h6 style={{ textAlign: "center" }}>
              Fontos tudnivalók
            </h6>
            <p>
              • Kérünk titeket, hogy ajándékot olyan formába hozzatok, amit malacperselyünk is meg tud emészteni.
            </p>
            <p>
              • A menyecske ingyen és bérmentve megtáncoltatható az éjszaka folyamán.
            </p>
            <p>
              • Ló és kecskeharapásért felelőséget nem vállalunk! A lámáért igen.
            </p>
            <p>
              • A Mennyaszonyrablást a törvény bünteti, de attól még lehet.
            </p>
            <p>
              • Autókkal az "autó-karámba" parkoljatok, hogy nehogy megszökjenek.
            </p>
          </TextParagraph>
        </Slide>
        <RsvpContainer id="rsvp">
          <iframe title=" " src="https://docs.google.com/forms/d/e/1FAIpQLSfA-h9M-IXXSmIJ3mkam5thhyH1-aX65OoJPVQTF72m8OOOyg/viewform?embedded=true"
            width="100%" height="100%" style={{flexGrow: 1, border: "none", margin: 0, padding: 0}} scrolling="no">
            Loading…
          </iframe>
        </RsvpContainer>
      </Container>
    </MainContentContainer>

  );
};

export default Information;
