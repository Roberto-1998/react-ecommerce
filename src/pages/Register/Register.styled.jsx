import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({
    width: "75%",
  })}
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  ${mobile({
    fontSize: "20px",
  })}
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  ${mobile({
    flexDirection: "column",
  })}
`;

export const InputBox = styled.div`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
`;

export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  cursor: pointer;
  color: white;
`;

export const ErrorText = styled.p`
  color: red;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
`;
