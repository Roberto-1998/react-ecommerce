import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link as LinkReact } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center/cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({
    width: "75%",
  })}
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  cursor: pointer;
  color: white;
  margin-bottom: 10px;
`;

export const Link = styled(LinkReact)`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`;

export const ErrorText = styled.p`
  color: red;
`;
