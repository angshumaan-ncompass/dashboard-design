import { Box, Stack, Typography } from "@mui/material";
import { theme } from "../theme";
import { Applicantt, dashBoardData } from "../Api";
import {
  StyledBox,
  StyledCard,
  StyledCircularProgress,
} from "../styles/ApplicantStyle";

const Applicant: React.FC = () => {
  return (
    <StyledCard>
      {dashBoardData.applicant.map((data: Applicantt) => {
        return (
          <Box
            key={data.id}
            display="flex"
            justifyContent="center"
            flexDirection="row"
            gap="1rem"
            flexWrap="wrap"
            flex="0 5 auto"
          >
            <Stack flexWrap="wrap" flex="1 10 auto">
              <Typography
                variant="caption"
                sx={{ color: theme.palette.primary.light, fontSize: "0.7rem" }}
              >
                {data.title}
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: "500", fontSize: "1.3rem" }}
              >
                {data.total}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: theme.palette.primary.light }}
              >
                {data.months}
              </Typography>
            </Stack>
            <Stack
              position="relative"
              justifyContent="center"
              flexWrap="wrap"
              flex="1 1 auto"
            >
              <StyledCircularProgress
                style={{ width: "3rem", height: "3rem" }}
                variant="determinate"
                value={data.progress}
                thickness={6}
                sx={{ color: data.color }}
              />
              <StyledBox>
                <Typography
                  variant="caption"
                  component="div"
                  color={data.color}
                >
                  {`${data.progress}%`}
                </Typography>
              </StyledBox>
            </Stack>
          </Box>
        );
      })}
    </StyledCard>
  );
};

export default Applicant;
