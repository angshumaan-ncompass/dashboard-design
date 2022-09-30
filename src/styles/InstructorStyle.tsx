import { Avatar, Card, styled } from "@mui/material";

export const StyledCardBox = styled(Card)({
  display: "flex",
  backgroundColor: "#2e2e2e",
  justifyContent: "space-evenly",
  flexDirection: "column",
  paddingBottom: "5px",
  paddingTop: "5px",
  borderRadius: "10px",
  width: "100%",
  flexWrap: "wrap",
  minHeight: "18%",
  gap: "0.8rem",
  flex: 0.3,
});

export const StyledAvatar = styled(Avatar)({
  ".MuiAvatar-img": {
    // width: "80%",
    // height: "4.7rem",
  },
});

export const sxContent = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginLeft: "0.7rem",
  flex: "1 0 auto",
  p: "0px",
  "&.MuiCardContent-root:last-child": {
    pb: "0px",
  },
};

export const sxIconButton = {
  paddingTop: "12px",
  alignSelf: "flex-start",
  margin: "0px",
  padding: "0px",
  paddingRight: "0.7rem",
  width: "15%",
};

export const sxAvatar = {
  // width: "17%",
  // height: "100%",
  // width: "4rem",
  // width: "17%",
  // height: "4.7rem",
  // width: "20%%",
  // height: "90%",
  borderRadius: "30px",
  // width: "17%",
  height: "100%",
  // width: "11%",
  backgroundColor: "white",
  mb: "0.5rem",
  width: {
    lg: "40px",
    xl: "17%",
  },
  // ml: "0.5rem",
};
