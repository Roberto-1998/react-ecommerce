import {
  AccountCircle,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import { Badge } from "@material-ui/core";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItemMat from "@mui/material/MenuItem";
import { deleteAccount, logout } from "../../redux/userRedux";

import {
  AntSwitch,
  Center,
  Container,
  ImageLanguage,
  Input,
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
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { SwitchTheme } from "../SwitchTheme";

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openModalLogout, setOpenModalLogout] = React.useState(false);
  const [openModalDelete, setOpenModalDelete] = React.useState(false);

  const [isEnglish, setLanguage] = useState(true);

  const [t, i18n] = useTranslation("navbar");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogut = () => {
    dispatch(logout());
    setAnchorEl(null);
    setOpenModalLogout(false);
  };

  const handleDelete = () => {
    dispatch(deleteAccount(user.username));
    setAnchorEl(null);
    setOpenModalDelete(false);
  };

  const handleOpenModalLogout = () => {
    setOpenModalLogout(true);
  };

  const handleOpenModalDelete = () => {
    setOpenModalDelete(true);
  };

  const handleCloseModalLogout = () => {
    setOpenModalLogout(false);
    setAnchorEl(null);
  };

  const handleCloseModalDelete = () => {
    setOpenModalDelete(false);
    setAnchorEl(null);
  };

  const handleChangeLanguage = (e) => {
    setLanguage(!isEnglish);
    i18n.changeLanguage(isEnglish ? "es" : "en");
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>
              <ImageLanguage src="https://icon-library.com/images/icon-english/icon-english-2.jpg" />
            </Typography>
            <AntSwitch
              defaultValue={isEnglish}
              inputProps={{ "aria-label": "ant design" }}
              value={isEnglish}
              onChange={handleChangeLanguage}
            />
            <Typography>
              <ImageLanguage src="https://childhearingloss.files.wordpress.com/2020/08/spanish-icon.png?w=512" />
            </Typography>
          </Stack>
          <SearchContainer>
            <Input placeholder={t("search")} />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to={"/"}>
            <Logo>DRESS.me</Logo>
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
                <AccountCircle /> <UserName>{user.username}</UserName>
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
                <MenuItemMat
                  onClick={handleOpenModalLogout}
                  sx={{ fontSize: "14px" }}
                >
                  <LogoutIcon sx={{ marginRight: "15px" }} /> Logout
                </MenuItemMat>
                <MenuItemMat
                  onClick={handleOpenModalDelete}
                  sx={{ fontSize: "14px" }}
                >
                  <PersonRemoveIcon sx={{ marginRight: "15px" }} /> Delete
                </MenuItemMat>
              </Menu>
            </MenuItem>
          )}

          {!user && (
            <MenuItem>
              <Link to={"/register"}>{t("register")}</Link>
            </MenuItem>
          )}
          {!user && (
            <MenuItem>
              <Link to={"/login"}>{t("login")}</Link>
            </MenuItem>
          )}

          <MenuItem>
            <SwitchTheme />
            <Link to={"/cart"}>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
      <Dialog
        open={openModalLogout}
        onClose={handleCloseModalLogout}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are you sure you want to Logout?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you want to proceed with de payment you need to be loged in.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleCloseModalLogout}
            size="small"
            variant="outlined"
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={handleLogut}
            autoFocus
            size="small"
            startIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openModalDelete}
        onClose={handleCloseModalDelete}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are you sure you want to Delete your account?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            All the data asociated will be deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleCloseModalDelete}
            size="small"
            variant="outlined"
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={handleDelete}
            autoFocus
            size="small"
            startIcon={<PersonRemoveIcon />}
          >
            Delete Account
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Navbar;
