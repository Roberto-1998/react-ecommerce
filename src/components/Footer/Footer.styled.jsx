import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  background: #d9a7c7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #fffcdc,
    #d9a7c7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #fffcdc,
    #d9a7c7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  display: flex;
  margin-top: 70px;
  ${mobile({
    flexDirection: "column",
  })};
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({
    alignItems: "center",
  })}
`;

export const Logo = styled.h1``;

export const Desc = styled.p`
  margin: 20px 0px;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.color};
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    display: "none",
  })}
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    backgroundColor: "#fff8f8",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  })}
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ${mobile({
    alignSelf: "start",
  })}
`;

export const Payment = styled.img`
  width: 50%;
`;
