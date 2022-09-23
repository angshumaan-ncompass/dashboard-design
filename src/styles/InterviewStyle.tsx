import { styled, Table, TableCell, tableCellClasses } from "@mui/material";
import { theme } from "../theme";

export const sxTableContainer = {
  borderRadius: "10px",
  backgroundColor: "#2e2e2e",
  paddingTop: "2rem",

  flex: {
    xs: "0",
    sm: "0",
    md: "5",
    lg: "5",
    xl: "5",
  },
  // height: {
  //   md: "80%",
  //   lg: "80%",
  //   xl: "80%",
  // },
};
export const sxBoxData = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  pl: "1.5rem",
  pr: "1.5rem",
  pt: "0.9rem",
  // pb: "0.9rem",
  backgroundColor: "#2e2e2e",
};

export const sxKeyBoard = {
  color: theme.palette.primary.light,
};

export const sxButton = {
  textTransform: "none",
  color: "#ffffffcf",
  border: `1px solid ${theme.palette.secondary.light}`,
};

export const StyledTable = styled(Table)({
  minWidth: 650,
  backgroundColor: "#2e2e2e",

  ".MuiTableRow-root.MuiTableRow-hover:hover:nth-child(n+1) td": {
    backgroundColor: "#bebebe26",
    cursor: "pointer",
    // padding: "10px",
  },

  ".MuiTableRow-root.MuiTableRow-hover:hover th": {
    backgroundColor: "#bebebe26",
    cursor: "pointer",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  ".MuiTableRow-root.MuiTableRow-hover:hover td:last-child": {
    backgroundColor: "#bebebe26",
    cursor: "pointer",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
  },
});

export const sxTableRowHead = {
  "&:nth-child(1) th": {
    borderColor: theme.palette.secondary.dark,
    paddingLeft: "1.5rem",
    fontSize: {
      xs: "0.6rem",
      sm: "0.6rem",
      md: "0.6rem",
      lg: "0.6rem",
      xl: "1rem",
    },
  },
};

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    color: "gray",
    backgroundColor: "#2e2e2e",
    fontSize: 10,
    paddingTop: 0,
    paddingRight: "3rem",
    paddingBottom: 0,
  },
}));

export const sxTableRowChild = {
  "&:last-child td,&:nth-child(1) td,&:nth-child(2) td, &:last-child th,&:nth-child(1) th,&:nth-child(2) th":
    {
      border: 0,
      color: theme.palette.primary.light,
      pt: "0.6rem",
      pb: "1rem",
      pl: "1.5rem",
      pr: "1rem",
    },
  "&:nth-child(n+1) > td:nth-child(n+5) .MuiTypography-caption": {
    borderRadius: "5px",
    pt: "0.3rem",
    pb: "0.3rem",
    pl: "0.4rem",
    pr: "0.5rem",
    // fontSize: "0.6rem",

    fontSize: {
      xs: "0.6rem",
      sm: "0.6rem",
      md: "0.6rem",
      lg: "0.6rem",
      xl: "1rem",
    },
  },
  "&:nth-child(1) > td:nth-child(5) .MuiTypography-caption": {
    backgroundColor: "#1b97f52c",
    color: "#1b98f5",
    fontSize: {
      xs: "0.6rem",
      sm: "0.6rem",
      md: "0.6rem",
      lg: "0.6rem",
      xl: "1rem",
    },
  },
  "&:nth-child(2) > td:nth-child(5) .MuiTypography-caption": {
    backgroundColor: "#4cd63738",
    color: "#4dd637",
    pr: "0.9rem",
  },
  "&:nth-child(3) > td:nth-child(5) .MuiTypography-caption": {
    background: "#ddd2013b",
    color: "#ddd101",
    pr: "0.9rem",
  },
};

export const sxTableCell = {
  // fontSize: "0.8rem",
  fontSize: {
    xs: "0.8rem",
    sm: "0.8rem",
    md: "0.8rem",
    lg: "0.8rem",
    xl: "1.2rem",
  },
};
export const sxAvatar = { width: "20%", height: "20%" };
