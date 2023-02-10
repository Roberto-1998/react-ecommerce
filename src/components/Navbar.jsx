import { Person, Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link as LinkReact } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItemMat from "@mui/material/MenuItem";
import { logout } from "../redux/userRedux";

const Container = styled.div`
  height: 60px;
  margin-bottom: 20px;
  ${mobile({
    height: "50px",
  })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    padding: "10px 0px",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({
    width: "50px",
  })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: "24px",
  })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    justifyContent: "center",
    flex: 2,
  })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
    fontSize: "12px",
    marginLeft: "10px",
  })}
`;

const Link = styled(LinkReact)`
  text-decoration: none;
  color: black;
`;

const UserItem = styled.div`
  display: flex;
  justify-content: flex;
  align-items: center;
  margin-right: 60px;

  ${mobile({
    marginRight: "20px",
  })}
`;

const UserName = styled.span`
  margin-left: 10px;
  font-weight: bold;
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogut = () => {
    dispatch(logout());
    setAnchorEl(null);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to={"/"}>
            <Logo>LAMA.</Logo>
          </Link>
        </Center>
        <Right>
          {user && (
            <MenuItem>
              <UserItem
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Person /> <UserName>{user.username}</UserName>
              </UserItem>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItemMat onClick={handleLogut}>Logout</MenuItemMat>
              </Menu>
            </MenuItem>
          )}

          {!user && (
            <MenuItem>
              <Link to={"/register"}>REGISTER</Link>
            </MenuItem>
          )}
          {!user && (
            <MenuItem>
              <Link to={"/login"}>LOGIN</Link>
            </MenuItem>
          )}
          <Link to={"/cart"}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
