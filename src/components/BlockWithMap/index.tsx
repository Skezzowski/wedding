import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { BlockWithMapSection, Content, ContentWrapper } from "./styles";
import Block from "../Block";

interface BlockWithMapProp {
  title: string;
  content: string;
  map: Map;
  t: any;
}

interface Map {
  title: string
  src: string
  width: string
  height: string
}

const BlockWithMap = ({ title, content, map, t }: BlockWithMapProp) => {
  return (
    <BlockWithMapSection>
        <Row justify="center" align="middle">
          <Col lg={8} md={8} sm={24} xs={24}>
            <Slide direction="left">
              <Block title={title} content={content} />
            </Slide>
          </Col>
          <Col lg={16} md={16} sm={24} xs={24}>
          <Slide direction="right">
            <div style={{height: '32rem', flex: 1, flexGrow: 2, minWidth: '60%' }}>
              <iframe title={map.title} src={map.src} width={map.width} height={map.height}></iframe>
            </div>
          </Slide>
          </Col>
        </Row>
    </BlockWithMapSection>
  );
};

export default withTranslation()(BlockWithMap);
