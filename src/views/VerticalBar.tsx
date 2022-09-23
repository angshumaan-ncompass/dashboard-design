import { Box, Stack, Typography } from "@mui/material";
import {
  StyledCard,
  sxBox,
  sxTypography,
  sxWrapper,
} from "../styles/VerticalBarStyle";
import { theme } from "../theme";

const VerticalBar = () => {
  return (
    <StyledCard>
      <Box sx={sxBox}>
        <Stack py="10px" pl="15px">
          <Typography
            component="div"
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontSize="0.9rem"
          >
            Presence Report
          </Typography>
        </Stack>
      </Box>
      <Box sx={sxBox}>
        <Stack
          direction={"column"}
          spacing={"2"}
          alignItems={"flex-end"}
          width="10%"
          color={theme.palette.primary.light}
          flexWrap="wrap"
        >
          <Typography variant="caption" fontSize="0.7rem">
            80
          </Typography>
          <Typography variant="caption" fontSize="0.7rem">
            60
          </Typography>
          <Typography variant="caption" fontSize="0.7rem">
            40
          </Typography>
          <Typography variant="caption" fontSize="0.7rem">
            20
          </Typography>
          <Typography variant="caption" fontSize="0.7rem">
            0
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          spacing={"2"}
          alignItems={"flex-end"}
          justifyContent="space-around"
          width="90%"
          flexWrap="wrap"
        >
          <Typography component={"div"} height="3rem" sx={sxTypography} />
          <Typography component={"div"} height="4rem" sx={sxTypography} />
          <Typography component={"div"} height="5rem" sx={sxTypography} />
          <Typography component={"div"} height="4rem" sx={sxTypography} />
          <Typography component={"div"} height="3rem" sx={sxTypography} />
        </Stack>
      </Box>
      <Box sx={sxWrapper}>
        <Typography variant="caption" fontSize="0.7rem">
          Sat
        </Typography>
        <Typography variant="caption" fontSize="0.7rem">
          Sun
        </Typography>
        <Typography variant="caption" fontSize="0.7rem">
          Mon
        </Typography>
        <Typography variant="caption" fontSize="0.7rem">
          Tue
        </Typography>
        <Typography variant="caption" fontSize="0.7rem">
          Wed
        </Typography>
      </Box>
    </StyledCard>
  );
};

export default VerticalBar;
