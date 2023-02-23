import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link as LinkReact } from "react-router-dom";
import { Switch, styled as styledM } from "@mui/material";

export const Container = styled.div`
  z-index: 999;
  height: 60px;
  margin-bottom: 20px;
  position: fixed;
  top: 30px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: white;
  ${mobile({
    height: "50px",
  })}
`;

export const Wrapper = styled.div`
  width: 100%;
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
  margin-left: 50px;
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

export const ImageLanguage = styled.img`
  width: 22px;
`;

export const AntSwitch = styledM(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#ffcf33" : "#ffcf33",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#445F9F" : "#445F9F",
    boxSizing: "border-box",
  },
}));
