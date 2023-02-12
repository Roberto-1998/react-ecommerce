import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({
    display: "none",
  })}
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;

  &:hover {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all ease 1.5s;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  width: 100vw !important;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.bg};
`;

export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

export const Image = styled.img`
  height: 80%;
`;

export const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 70px;
`;

export const Desc = styled.div`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
