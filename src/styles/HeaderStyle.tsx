import {
  Avatar,
  styled,
  Toolbar,
  InputBase,
  alpha,
  Box,
  AppBar,
  experimental_sx as sx,
} from "@mui/material";

export const sxLeaf = {
  my: 2,
  mx: "auto",
};
export const sxItem = {
  textAlign: "center",
};

export const StyledAppBar = styled(AppBar)(
  sx({
    position: "sticky",
    backgroundColor: "#413e3e00",
    width: "90vw",
    margin: "auto",
    flex: 2,
    elevation: 0,
  })
);

export const sxStack = {
  display: { xs: "block", sm: "block" },
};
export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  backgroundColor: "#222020e8",
  flex: 2,
});

export const StyledSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",

  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(1),
    // marginLeft: "9px",
    width: "62%",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  paddingLeft: "8px",
  // padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  color: "white",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  right: 0,
  left: "17px",
  fontSize: "0.8rem",

  color: "white",
  "& .MuiInputBase-input": {
    color: "white",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingLeft: "12px",
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("sm")]: {
    //   width: "12ch",
    //   "&:focus": {
    //     width: "20ch",
    //   },
    // },
  },
}));

export const sxIconButton = {
  ml: "0.5rem",
  display: { xs: "block", sm: "block", md: "block", lg: "none" },
  color: "gray",
};

export const sxStackContent = {
  paddingTop: "10px",
  paddingBottom: "10px",
  display: {
    xs: {
      justifyContent: "space-around",
      paddingLeft: "0px",
    },
  },
};

export const sxAvatarLeaf = {
  display: { xs: "none", sm: "block", md: "block", lg: "block" },
};

export const StyledBoxContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

export const sxStackInput = {
  paddingTop: "10px",
  paddingBottom: "10px",
  width: {
    xs: "100%",
    sm: "inherit",
  },
  // display: { xs: "none", sm: "none", md: "none", lg: "flex" },
};

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  color: "gray",
  width: "33px",
  height: "33px",
}));

export const sxSvg = {
  fontSize: "1rem",
  color: "white",
};

export const sxDrawer = {
  display: { xs: "block", sm: "block", md: "block", lg: "none" },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: 240,
  },
};
