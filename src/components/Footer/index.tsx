import { Row } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  Extra,
  LogoContainer,
} from "./styles";
import ScrollToTop from "../../common/ScrollToTop";


const Footer = ({ _ }: any) => {
  return (
    <>
      <Extra>
        <Container>
          <Row
            justify="center"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            
            <LogoContainer>
              <SvgIcon
                src="logo.svg"
                aria-label="homepage"
                width="80px"
                height="40px"
              />
            </LogoContainer>
            <ScrollToTop></ScrollToTop>

          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
