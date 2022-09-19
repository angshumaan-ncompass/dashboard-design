import { styled } from "@mui/material";
import { keyframes } from "@emotion/react";

export const StyleDot = styled("div")(() => ({
  "@keyframes dot": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(224deg)",
    },
  },
  position: "absolute",
  height: "7rem",
  width: "7rem",
  zIndex: 10,
  animation: "dot  2s linear forwards",

  "&::before": {
    position: "absolute",
    content: '""',
    height: "4px",
    width: "4px",
    zIndex: "10",
    borderRadius: "50%",
    inset: "0.74rem 4.53rem",
  },
}));

export const StyledCard = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  fontFamily: "Roboto, sans-serif",
  backgroundColor: "black",
}));

export const StyledHeader = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  width: "100%",
  flexWrap: "wrap",
  gap: "1.1rem",
}));

export const StyledContent = styled("div")(() => ({
  backgroundColor: "#bebebe3d",
  borderRadius: "10px",
  paddingTop: "1.3rem",
  paddingBottom: "1.3rem",
  // paddingLeft: "2.3rem",
  // paddingRight: "2.3rem",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  flex: 1,
  paddingLeft: "1rem",
  paddingRight: "1rem",
}));

export const StyledList = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
}));

export const StyledItem = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "6rem",
  width: "7rem",
  position: "relative",
}));

export const StyledSvg = styled("svg")(() => ({
  position: "relative",
  height: "7rem",
  width: "7rem",
  transform: "rotate(295deg)",
}));

export const spin = keyframes({
  "100%": {
    strokeDashoffset: "120",
  },
});
export const StyledCircle = styled("circle")(() => ({
  fill: "none",
  strokeWidth: "2px",
  strokeDasharray: "300",
  strokeDashoffset: "300",
  strokeLinecap: "round",
  animation: `${spin} 2s linear forwards`,
}));
export const StyleBackgroundColorCircle = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "5rem",
  width: "5rem",
  borderRadius: "50%",
  position: "absolute",
}));

export const StyledImage = styled("img")(() => ({
  borderRadius: "50%",
  position: "absolute",
  height: "6rem",
  width: "5.5rem",
  objectFit: "scale-down",
  bottom: "0.01rem",
}));

export const StyledCardData = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.4rem",
}));

export const StyledCardTypography = styled("h6")(() => ({
  color: "#ffffffa8",
  fontWeight: 400,
  fontFamily: "sans-serif",
}));

export const StyledButton = styled("button")(() => ({
  fontFamily: "sans-serif",
  backgroundColor: "#413e3e78",
  paddingLeft: "1.6rem",
  paddingRight: "1.6rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  color: " #ffffffe0",
  borderRadius: "10px",
  marginTop: "1rem",
  cursor: "pointer",
  textDecoration: "none",
  textAlign: "center",
  border: "1px solid rgba(255, 255, 255, 0.258)",
  fontSize: "0.7rem",
  width: "100%",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.258)",
  },
}));

export const sxBox = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "1.2rem",
  paddingRight: "1rem",
  paddingLeft: "1rem",
  background: "black",
};

export const StyledH4 = styled("h4")({
  color: " rgba(255, 255, 255, 0.77)",
  fontWeight: 500,
  fontSize: "0.9rem",
  marginTop: "0.5rem",
  fontFamily: "sans-serif",
});
