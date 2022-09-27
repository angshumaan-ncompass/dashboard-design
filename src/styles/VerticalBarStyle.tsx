import { Card, styled } from "@mui/material";
import { theme } from "../theme";

export const StyledCard = styled(Card)({
  display: "flex",
  backgroundColor: "#2e2e2e",
  justifyContent: "space-evenly",
  flexDirection: "column",
  paddingBottom: "11px",
  borderRadius: "10px",
  width: "100%",
  // flexWrap: "wrap",
  flex: 0.4,
});

export const sxBox = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

export const sxWrapper = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  color: theme.palette.primary.light,
  width: "90%",
  alignSelf: "flex-end",
  flexWrap: "wrap",
  marginTop: "0.5rem",
};

export const sxTypography = {
  width: "1rem",
  // width: "1rem",
  borderRadius: "20px",
  background: "linear-gradient(to bottom, #ff6347 30%, #666699 105%)",
};
