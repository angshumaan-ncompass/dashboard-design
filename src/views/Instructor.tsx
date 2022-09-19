import { MoreHoriz } from "@mui/icons-material";
import {
  Avatar,
  Box,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Board, dashBoardData } from "../Api";
import {
  StyledCardBox,
  sxAvatar,
  sxContent,
  sxIconButton,
} from "../styles/InstructorStyle";
import { theme } from "../theme";

const Instructor: React.FC = () => {
  return (
    <StyledCardBox>
      <Stack
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-around"}
        width="100%"
        margin="auto"
        pt="10px"
      >
        <CardContent sx={sxContent}>
          <Box>
            <Typography
              component="div"
              variant="subtitle1"
              color={theme.palette.primary.main}
              fontSize="0.9rem"
              paddingLeft={"7px"}
            >
              Board Instructor
            </Typography>
          </Box>
        </CardContent>
        <IconButton aria-label="settings" sx={sxIconButton}>
          <MoreHoriz sx={{ color: "gray" }} />
        </IconButton>
      </Stack>

      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-evenly"}
        // gap={"0.7rem"}
        flexWrap="wrap"
      >
        {dashBoardData.board.map((item: Board) => {
          return (
            <Avatar
              key={item.id}
              alt="Remy Sharp"
              src={item.image}
              sx={sxAvatar}
            />
          );
        })}
      </Stack>
    </StyledCardBox>
  );
};

export default Instructor;
