import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link as LinkReact } from "react-router-dom";

export const Container = styled.div`
  height: 60px;
  margin-bottom: 20px;
  ${mobile({
    height: "50px",
  })}
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    padding: "10px 0px",
  })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
`;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;
  ${mobile({
    width: "50px",
  })}
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: "24px",
  })}
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    justifyContent: "center",
    flex: 2,
  })}
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
    fontSize: "12px",
    marginLeft: "10px",
  })}
`;

export const Link = styled(LinkReact)`
  text-decoration: none;
  color: black;
`;

export const UserItem = styled.div`
  display: flex;
  justify-content: flex;
  align-items: center;
  margin-right: 60px;

  ${mobile({
    marginRight: "20px",
  })}
`;

export const UserName = styled.span`
  margin-left: 10px;
  font-weight: bold;
`;
