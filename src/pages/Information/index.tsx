import { lazy } from "react";
import styled from "styled-components";
import MiddleBlock from "../../components/MiddleBlock";
import AboutContent from "../../content/AboutContent.json";

const Container = lazy(() => import("../../common/Container"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

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
  padding: 2rem;
`;

const Information = () => {
  return (
    <MainContentContainer>
      <img src="/img/izlandkiss7.png" width={"100%"} /> 
      <Container>
        <TextParagraph>
          <h6>
            Összeházasodunk!
          </h6>
          <p>
            Kedves Családunk és Barátaink, ezt a weboldalt azért hoztuk létre, hogy minden fontos információt könnyedén megtaláljatok.
            Szeretettel várunk benneteket a <b>Lósi Majorban 2023.09.23-án</b>
            <br/>
            <br/> 
            Kérünk titeket, hogy minél előbb jelezzetek vissza a jobb felső sarokban található menüpont segítségével!
          </p>
        </TextParagraph>
        <TextParagraph>
          <h6>
            Helyszín
          </h6>
          <p>
            Az esküvő helyszíne a Lósi Major. A lenti térképen láthatjátok merre található. parkolás stb....
            <br/>
            <br/>
            Sajnos szállást nem tudunk biztosítani, de egy részletes listát találhattok a "Szállások" menüpont alatt, ezeket mind teljes szívvel ajánljuk.
            Mivel a telek nagy része a miénk erre a kis időre, így a válalkozó szellemüek akár sátorral/lakókocsival is érkezhetnek!
          </p>
          <div style={{width: '100%', height: '32rem', flex: 1, flexGrow: 2, minWidth: '60%'}}>
                <iframe title="Szállás Térkép" src="https://www.google.com/maps/d/u/0/embed?mid=10yBO2wGA57re8MVqKxJv2thTHq-oVFU&ehbc=2E312F" width="100%" height="100%"></iframe>
              </div>

        </TextParagraph>
        <TextParagraph>
          <h6>
            Ajándékon gondolkozol?
          </h6>
          <p>
            Ne tedd! Egy borítékban könnyen elrejtheted. 
          </p>
        </TextParagraph>
      </Container>
    </MainContentContainer>
  );
};

export default Information;
