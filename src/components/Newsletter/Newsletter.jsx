import { Send } from "@material-ui/icons";
import React from "react";
import {
  Button,
  Container,
  Desc,
  Input,
  InputContainer,
  Title,
} from "./Newsletter.styled";
import { useTranslation } from "react-i18next";

const Newsletter = () => {
  const [t] = useTranslation("homePage");

  return (
    <Container>
      <Title>{t("newsletter.title")}</Title>
      <Desc>{t("newsletter.text")}</Desc>
      <InputContainer>
        <Input placeholder={t("newsletter.placeholder")} />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
