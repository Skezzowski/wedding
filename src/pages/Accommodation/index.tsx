import { lazy } from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import { MinTitle, MinPara } from "../../components/ContentBlock/LeftContentBlock/styles";

const Container = lazy(() => import("../../common/Container"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const MapContainer = styled("div")`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  position: relative;
  width: 100%;
  height: 80vh;
  position: relative;
  padding-top: 10rem;
`

const TextContainer = styled("div")`
  width: 75%;
  margin: 1vh;
  flex: 1;
`

const Title = styled(MinTitle)`
  font-size: 50px;
`

const Accommodation = () => {
  return (
    <Container>
        <Fade direction="left">
          <MapContainer>
              <TextContainer>
                <Title>Szállások</Title>
                <MinPara> 
                  Az alábbi térképen találhatóak a Loshi Major közelében lévő szállások, melyek közül szabadon választhattok. <br/>
                  <br/>
                  Ha szükség van segítségre, keressétek Orsit! :)
                </MinPara>
              </TextContainer>
              <div style={{width: '100%', height: '100%', flex: 1, flexGrow: 2, minWidth: '60%'}}>
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1w4Nwq7g59TZhaBJqWzv1tV49Ia9TJiMZ" width="100%" height="100%"></iframe>
              </div>
          </MapContainer>
        </Fade>
    </Container>
    
  );
};

export default Accommodation;
