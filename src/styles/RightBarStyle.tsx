import {
  Box,
  styled,
  experimental_sx as sx,
  Card,
  Button,
} from "@mui/material";

export const StyledBox = styled(Box)(
  sx({
    flex: 2,
    gap: "0.79rem",
    display: "flex",

    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // flexWrap: "wrap",
    bgcolor: "#413e3e00",
    // height: "100%",
    pt: "10px",
    pb: "10px",
    pr: "16px",
    pl: "16px",
    height: {
      xs: "100%",
      sm: "100%",
      md: "90vh",
      lg: "90vh",
      xl: "90vh",
    },
  })
);

export const sxBox = {
  display: "flex",
  flexDirection: "row",
  width: "80%",
  // height: "80%",
  // flexWrap: "wrap",
  paddingTop: "10px",
  paddingBottom: "10px",
};
export const StyledCard = styled(Card)({
  display: "flex",
  backgroundColor: "#2e2e2e",
  justifyContent: "space-around",
  width: "100%",
  borderRadius: "10px",
  flexWrap: "wrap",
  flex: 0.2,
  alignItems: "center",
});

export const StyledCardContent = styled(Box)({
  display: "flex",
  flexDirection: "row",
  width: "80%",
  paddingLeft: "0.8rem",
});

export const sxCardMedia = {
  borderRadius: "10px",
  width: "2.8rem",
  // width: {
  //   xl: "67%",
  //   lg: "67%",
  //   md: "67%",
  //   sm: "0",
  //   xs: "0",
  // },
};

export const sxCardContent = {
  flex: "1 0 auto",
  "&:last-child": { p: 0 },
  // pb: "10px", pl: "0.3rem", pt: "1.1rem"
  display: {
    sx: "none",
  },
};

export const sxCardActions = { pt: "8px", pl: "0", pr: "0" };

export const StyledButton = styled(Button)({
  backgroundColor: "rgba(102, 94, 94, 0.6)",
  textTransform: "none",
  paddingTop: "2px",
  paddingBottom: "2px",
  fontSize: "0.6rem",
  minWidth: "60px",
});

export const sxCardicon = { pt: "5px", p: 0 };

export const sxCardImage = {
  width: "2.8rem",
  borderRadius: "10px",
  margin: "auto",
};

export const sxCardData = {
  flex: "1 0 auto",
  "&:last-child": { pr: "22px", pt: "10px", pb: "10px" },
  pl: "0.3rem",
};

export const sxIconButton = {
  paddingTop: "4px",
  alignSelf: "flex-start",
  margin: "0px",
  // padding: "0px",
  width: "10%",
  paddingRight: "1rem",
};

export const sxMoreHoriz = {
  color: "gray",
  marginTop: "3px",
};

export const sxContent = {
  paddingLeft: "0.7rem",
  flex: "1 0 auto",
  p: "0px",
};
