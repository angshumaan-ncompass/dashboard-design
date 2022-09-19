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
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
    bgcolor: "#413e3e00",
    height: "100%",
    py: "1px",
    px: 2,
  })
);

export const sxBox = {
  display: "flex",
  flexDirection: "row",
  width: "80%",
};
export const StyledCard = styled(Card)({
  display: "flex",
  backgroundColor: "#2e2e2e",
  justifyContent: "space-around",
  width: "100%",
  borderRadius: "10px",
  flexWrap: "wrap",
});

export const StyledCardContent = styled(Box)({
  display: "flex",
  flexDirection: "row",
  width: "80%",
});

export const sxCardMedia = { width: "67%", borderRadius: "10px" };

export const sxCardContent = {
  flex: "1 0 auto",
  "&:last-child": { pb: "10px", pl: "0.3rem", pt: "1.1rem" },
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
  width: "70%",
  borderRadius: "10px",
  margin: "auto",
};

export const sxCardData = {
  flex: "1 0 auto",
  "&:last-child": { pr: "0px", pt: "10px", pb: "10px" },
  pl: "0.3rem",
};

export const sxIconButton = {
  paddingTop: "4px",
  alignSelf: "flex-start",
  margin: "0px",
  // padding: "0px",
  width: "10%",
  paddingRight: "0.5rem",
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
