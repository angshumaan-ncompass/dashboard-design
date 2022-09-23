import { Box, Card, CircularProgress, keyframes, styled } from "@mui/material";

export const StyledCard = styled(Card)(() => ({
  ".MuiCard-root": {
    backgroundColor: "black",
  },
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: "#2e2e2e",
  flexWrap: "wrap",
  color: "white",
  flex: "0 10 auto",
  gap: "1rem",
  borderRadius: "10px",
  // height: "100%",
  alignContent: "center",
}));

export const spin = keyframes({
  "0%": {
    strokeDashoffset: "120",
  },
});
export const StyledCircularProgress = styled(CircularProgress)(() => ({
  "&.MuiCircularProgress-root": {
    width: "3rem",
    height: "3rem",
    borderRadius: "2rem",
    backgroundColor: "#fbfbfb12",
  },
  ".MuiCircularProgress-svg": {
    width: "3rem",
    strokeLinecap: "round",
  },
  ".MuiCircularProgress-circle": {
    animation: `${spin} 2s linear forwards`,
  },
}));

export const StyledBox = styled(Box)({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  flex: "1 1 auto",
  width: "2.1rem",
  margin: "auto",
  height: "2.1rem",
  backgroundColor: "black",
  borderRadius: "30px",
});
