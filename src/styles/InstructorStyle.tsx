import { Card, styled } from "@mui/material";

export const StyledCardBox = styled(Card)({
  display: "flex",
  backgroundColor: "#2e2e2e",
  justifyContent: "space-around",
  flexDirection: "column",
  paddingBottom: "10px",
  borderRadius: "10px",
  width: "100%",
  flexWrap: "wrap",
  gap: "0.8rem",
  flex: 0.3,
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
  width: "13%",
};

export const sxAvatar = {
  // width: "17%",
  // height: "100%",
  // width: "4rem",
  width: "17%",
  height: "4.7rem",
  borderRadius: "30px",
  backgroundColor: "white",
  mb: "0.2rem",
  // ml: "0.5rem",
};
