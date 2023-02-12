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

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
