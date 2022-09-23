import React, { useState } from "react";
import {
  Typography,
  Avatar,
  Stack,
  IconButton,
  Box,
  Drawer as MuiDrawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  sxItem,
  sxLeaf,
  StyledSearch,
  SearchIconWrapper,
  StyledInputBase,
  StyledToolbar,
  sxStack,
  StyledAppBar,
  sxIconButton,
  sxStackContent,
  sxAvatarLeaf,
  StyledBoxContent,
  sxStackInput,
  StyledAvatar,
  sxDrawer,
  sxSvg,
} from "../styles/HeaderStyle";
import {
  NotificationAdd,
  SettingsTwoTone,
  Menu,
  Search,
} from "@mui/icons-material";
import leaf from "../assets/images/leaf.png";
import clap from "../assets/images/clap.png";
import { theme } from "../theme";
import { navItems } from "../helper/Header.helper";

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <StyledAppBar elevation={0}>
      <StyledToolbar>
        <Stack
          position="absolute"
          left="0"
          right="0"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
          sx={sxStack}
        >
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={sxIconButton}
          >
            <Menu />
          </IconButton>

          <Box component="nav">
            <MuiDrawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={sxDrawer}
            >
              <Box onClick={handleDrawerToggle}>
                <Avatar alt="leaf" src={leaf} sx={sxLeaf} />
                <Divider />
                <Stack
                  justifyContent={"center"}
                  alignItems="center"
                  direction={"row"}
                  gap="1rem"
                  marginTop={"1rem"}
                  sx={{
                    display: {
                      xs: "flex",
                      sm: "none",
                      md: "none",
                      lg: "none",
                    },
                  }}
                >
                  <StyledAvatar
                    alt="notification"
                    variant="circular"
                    sx={{
                      backgroundColor: {
                        xs: "black",
                      },
                    }}
                  >
                    <NotificationAdd sx={sxSvg} />
                  </StyledAvatar>
                  <StyledAvatar
                    alt="settings"
                    variant="circular"
                    sx={{
                      backgroundColor: {
                        xs: "black",
                      },
                    }}
                    // sx={{
                    //   display: {
                    //     xs: "none",
                    //     sm: "flex",
                    //     md: "flex",
                    //     lg: "flex",
                    //     // xl:"flex"
                    //   },
                    // }}
                  >
                    <SettingsTwoTone sx={sxSvg} />
                  </StyledAvatar>
                </Stack>
                <List>
                  {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                      <ListItemButton sx={sxItem}>
                        <ListItemText primary={item} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </MuiDrawer>
          </Box>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          paddingLeft="65px"
          gap="6rem"
          sx={sxStackContent}
        >
          <Avatar alt="logo" src={leaf} sx={sxAvatarLeaf} />

          <StyledBoxContent>
            <Typography
              variant="h6"
              fontWeight="500"
              color={theme.palette.primary.main}
              sx={{
                fontSize: {
                  lg: 20,
                  md: 20,
                  sm: 20,
                  xs: 14,
                },
              }}
            >
              Hello,Leslie Alexander
            </Typography>
            <Avatar alt="logo" src={clap} />
          </StyledBoxContent>
        </Stack>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={"13px"}
          flexWrap="wrap"
          marginLeft="auto"
          sx={sxStackInput}
        >
          <StyledSearch>
            <SearchIconWrapper>
              <Search sx={{ fontSize: "1rem" }} />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search Game" />
          </StyledSearch>

          <Stack
            justifyContent={"center"}
            alignItems="center"
            direction={"row"}
            gap="1rem"
          >
            <StyledAvatar
              alt="notification"
              variant="circular"
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                  md: "flex",
                  lg: "flex",
                  // xl:"flex"
                },
              }}
            >
              <NotificationAdd sx={sxSvg} />
            </StyledAvatar>
            <StyledAvatar
              alt="settings"
              variant="circular"
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                  md: "flex",
                  lg: "flex",
                  // xl:"flex"
                },
              }}
            >
              <SettingsTwoTone sx={sxSvg} />
            </StyledAvatar>
          </Stack>
        </Stack>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
