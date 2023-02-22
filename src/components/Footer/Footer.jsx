import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import { footerList } from "../../data";
import {
  Center,
  ContactItem,
  Container,
  Desc,
  Left,
  List,
  ListItem,
  Logo,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
} from "./Footer.styled";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const [t] = useTranslation("footer");

  return (
    <Container>
      <Left>
        <Logo>DRESS.me</Logo>
        <Desc>{t("leftSide.desc")}</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>

          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>{t("centerSide.linksTitle")}</Title>

        <List>
          {footerList.map((item) => (
            <ListItem key={item.text}>
              {" "}
              <Link to={item.link}> {t(`${item.text}`)}</Link>
            </ListItem>
          ))}
        </List>
      </Center>

      <Right>
        <Title>{t("rightSide.contact")}</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 622 Dixie Path, SOuth
          Tobinchester 98336
        </ContactItem>

        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +1 234 56 78
        </ContactItem>

        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@lamagmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
