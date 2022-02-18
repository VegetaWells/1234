import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from '@mui/material';
import ToolBar from "@material-ui/core/ToolBar";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Recomendations", href: "/recomendations" },
  { name: "My collections", href: "/myCollections" },
];

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
  },
  avatar: {
    width: 80, 
    marginRight: "auto",
    color: "white",
    backgroundColor: "black",
    borderRadius: 10,
    height: 30,
    border: "2px solid gray",
},
}));
export const Header = () => {
    const styles = useStyles();
    const [open, setOpen] = useState(false);
    return (
      <AppBar position="sticky" color="default">
        <Container maxWidth="md">
          <ToolBar disableGutters>
            <Avatar className={styles.avatar}>Spotify</Avatar>
            <Hidden xsDown>
              {navigationLinks.map((item) => (
                <Link
                  className={styles.link}
                  color="textPrimary"
                  variant="button"
                  underline="none"
                  href={item.href}
                  key={item.name}
                >
                  {item.name}
                </Link>
              ))}
            </Hidden>
            <Hidden smUp>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </ToolBar>
        </Container>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <div
            onClick={() => setOpen(false)}
            onKeyPress={() => setOpen(false)}
            role="button"
            tabIndex={0}
          >
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {navigationLinks.map((item) => (
              <ListItem key={item.name}>
                <Link
                  className={styles.link}
                  color="textPrimary"
                  variant="button"
                  underline="none"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </AppBar>
    );
  }