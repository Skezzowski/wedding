import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";
import ScrollToTop from "../../common/ScrollToTop";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

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
