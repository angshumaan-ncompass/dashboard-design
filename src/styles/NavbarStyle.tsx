import {
  Box,
  ListItem,
  styled,
  experimental_sx as sx,
  Toolbar,
  MenuList,
} from "@mui/material";
import { theme } from "../theme";

export const StyledListItem = styled(ListItem)({
  "&:hover": {
    backgroundColor: "tomato",
    color: theme.palette.primary.main,
    borderRadius: "10px",
  },
  color: theme.palette.primary.light,
  gap: "0.69rem",
  fontFamily: "inherit",
  fontSize: "0.9rem",
});

export const StyledBox = styled(Box)(
  sx({
    display: {
      xs: "none",
      sm: "none",
      md: "none",
      lg: "block",
      xl: "block",
    },
    height: {
      xs: "100%",
      sm: "90vh",
    },
    // height: "90vh",
  })
);

export const sxAppBar = {
  height: "100%",
  backgroundColor: "#413e3e00",
};

export const StyledToolbar = styled(Toolbar)({
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
});

export const StyledContent = styled(Box)(
  sx({
    display: {
      xs: "none",
      sm: "none",
      md: "none",
      lg: "flex",
    },
    justifyContent: "flex-start",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    marginTop: "1.5rem",
    alignItems: "flex-end",
  })
);

export const StyledMenuList = styled(MenuList)({
  height: "55%",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const sxPersonIcon = {
  borderRadius: "5px",
  width: "30px",
  height: "30px",
  ml: "10px",
  backgroundColor: "tomato",
};

export const sxKeyBoardArrowDown = {
  color: theme.palette.primary.light,
};

export const StyledAction = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  // width: "100%",
  height: "100%",
  paddingBottom: "10px",
});
