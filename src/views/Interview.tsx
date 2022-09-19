import React from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Paper,
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import {
  StyledTable,
  StyledTableCell,
  sxAvatar,
  sxBoxData,
  sxButton,
  sxKeyBoard,
  sxTableCell,
  sxTableContainer,
  sxTableRowChild,
  sxTableRowHead,
} from "../styles/InterviewStyle";
import { dashBoardData, Intervieww } from "../Api";

const Interview: React.FC = () => {
  return (
    <TableContainer component={Paper} sx={sxTableContainer}>
      <Box sx={sxBoxData}>
        <Typography variant="subtitle1" color={"#ffffffcf"}>
          Interview Schedule
        </Typography>
        <Typography>
          <Button
            variant="outlined"
            color="inherit"
            size="small"
            endIcon={<KeyboardArrowDown sx={sxKeyBoard} />}
            sx={sxButton}
          >
            Today
          </Button>
        </Typography>
      </Box>
      <StyledTable aria-label="a dense table">
        <TableHead>
          <TableRow sx={sxTableRowHead}>
            <StyledTableCell>Candidate Name</StyledTableCell>
            <StyledTableCell>Post Name</StyledTableCell>
            <StyledTableCell>Designation</StyledTableCell>
            <StyledTableCell>Time</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dashBoardData.interview.map((row: Intervieww) => (
            <TableRow hover={true} key={row.candidateName} sx={sxTableRowChild}>
              <TableCell component="th" scope="row" sx={sxTableCell}>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  gap={"0.5rem"}
                  fontFamily="inherit"
                >
                  <Avatar
                    alt="profile picture"
                    src={row.picture}
                    sx={sxAvatar}
                  />

                  {row.candidateName}
                </Stack>
              </TableCell>
              <TableCell sx={sxTableCell}>{row.postName}</TableCell>
              <TableCell sx={sxTableCell}>{row.designation}</TableCell>
              <TableCell sx={sxTableCell}>{row.time}</TableCell>
              <TableCell>
                <Typography variant="caption">{row.status}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default Interview;
