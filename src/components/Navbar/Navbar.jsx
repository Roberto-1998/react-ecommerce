import { Person, Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Badge } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItemMat from "@mui/material/MenuItem";
import { deleteAccount, logout } from "../../redux/userRedux";
import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Link,
  Logo,
  MenuItem,
  Right,
  SearchContainer,
  UserItem,
  UserName,
  Wrapper,
} from "./Navbar.styled";

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

  const handleDeleteAccount = () => {
    dispatch(deleteAccount(user.username));
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
                <MenuItemMat onClick={handleDeleteAccount}>
                  Delete Account
                </MenuItemMat>
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
