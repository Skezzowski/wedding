import { lazy } from "react";
import { Slide } from "react-awesome-reveal";
import styled from "styled-components";

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

const Information = () => {
  return (
    <MainContentContainer>
      <img src="/img/izlandkiss7.png" width={"100%"} alt="" />
      <Container>
        <Slide direction="left">
          <TextParagraph>
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
        <Slide direction="left">
          <TextParagraph>
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
              Sajnos szállást nem tudunk biztosítani, de egy részletes listát találhattok a "Szállások" menüpont alatt, ezeket mind teljes szívvel ajánljuk.
            </p>
            <p>
            Mivel a telek nagy része a miénk erre a kis időre, így a válalkozó szellemüek akár <b>sátorral </b> vagy <b>lakókocsival</b> is érkezhetnek!
            </p>
            <div style={{ width: '100%', height: '32rem', flex: 1, flexGrow: 2, minWidth: '60%' }}>
              <iframe title="Szállás Térkép" src="https://www.google.com/maps/d/u/0/embed?mid=10yBO2wGA57re8MVqKxJv2thTHq-oVFU&ehbc=2E312F" width="100%" height="100%"></iframe>
            </div>
          </TextParagraph>
        </Slide>

        <Slide direction="left">
          <TextParagraph>
            <h6>
              Fontos tudni
            </h6>
            <p>
            • Ajándékot csak olyan formában hozzatok, hogy malacperselyünk is meg tudja emészteni!
            </p>
            <p>
            • A mai gazdasági helyzetre tekintettel, a menyecsketánc elmarad. Természetesen attól még a menyecske megtáncoltatható. Megértéseket köszönjük!
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
      </Container>
    </MainContentContainer>
  );
};

export default Information;
