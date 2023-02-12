import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 70vh;
  flex: 1;
  margin: 3px;
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({
    height: "25vh",
  })}
`;
export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  color: white;
`;
export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  cursor: pointer;
  font-weight: 600;
  color: gray;
`;
