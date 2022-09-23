import { theme } from "../theme";
import { AppBar, Typography, Stack, MenuItem, Avatar } from "@mui/material";
import personIcon from "../assets/images/person-icon-red.png";
import { KeyboardArrowDown } from "@mui/icons-material";
import { listItems } from "../helper/Navbar.helper";
import {
  StyledAction,
  StyledBox,
  StyledContent,
  StyledListItem,
  StyledMenuList,
  StyledToolbar,
  sxAppBar,
  sxKeyBoardArrowDown,
  sxPersonIcon,
} from "../styles/NavbarStyle";

const Navbar: React.FC = () => {
  return (
    <StyledBox flex={1}>
      <AppBar component="nav" position="static" sx={sxAppBar} elevation={0}>
        <StyledToolbar>
          <StyledContent>
            <StyledMenuList>
              {listItems.map((value, index) => (
                <MenuItem sx={{ width: "100%" }}>
                  <StyledListItem key={index}>{value}</StyledListItem>
                </MenuItem>
              ))}
            </StyledMenuList>
            <StyledAction>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
                bgcolor={theme.palette.secondary.main}
                py="10px"
                pl="5px"
                pr="1rem"
                borderRadius="10px"
              >
                <Avatar alt="logo" src={personIcon} sx={sxPersonIcon} />
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={3}
                  width="70%"
                  margin={"auto"}
                  alignSelf="flex"
                >
                  <Typography color={"white"}>Thomas</Typography>

                  <KeyboardArrowDown sx={sxKeyBoardArrowDown} />
                </Stack>
              </Stack>
            </StyledAction>
          </StyledContent>
        </StyledToolbar>
      </AppBar>
    </StyledBox>
  );
};

export default Navbar;
