// import React, { useEffect, useState } from "react";
import ui from "../assets/images/ui.png";
import { MoreHoriz } from "@mui/icons-material";
import { theme } from "../theme";
import { dashBoardData, Job } from "../Api";
import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  StyledBox,
  StyledButton,
  StyledCard,
  StyledCardContent,
  sxBox,
  sxCardActions,
  sxCardContent,
  sxCardData,
  sxCardImage,
  sxCardMedia,
  sxIconButton,
  sxMoreHoriz,
} from "../styles/RightBarStyle";
import VerticalBar from "../views/VerticalBar";
import Instructor from "../views/Instructor";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase-config";

const RightBar: React.FC = () => {
  // const [job, setJob] = useState<any>([]);
  // const jobCollectionRef = collection(db, "job");

  // useEffect(() => {
  //   const getJob = async () => {
  //     const data = await getDocs(jobCollectionRef);
  //     setJob(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getJob();
  // }, [jobCollectionRef]);
  return (
    <StyledBox>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Typography variant="subtitle2" color={"white"}>
          Recommended Job
        </Typography>
        <Typography variant="subtitle2" color="tomato">
          SEE ALL
        </Typography>
      </Stack>
      {dashBoardData.job.map((data: Job) => {
        return (
          <StyledCard key={data.id} sx={{ minHeight: "15%" }}>
            <Box sx={sxBox}>
              <Stack
                justifyContent={"space-around"}
                flexDirection={"row"}
                alignItems={"flex-start"}
                flexWrap={"wrap"}
                // pt={"15px"}
                height="100%"
                pl="0.5rem"
              >
                <CardMedia
                  component="img"
                  sx={sxCardMedia}
                  image={data.image}
                  alt="UI designer"
                />
              </Stack>
              <CardContent sx={sxCardContent}>
                <Box pl="1rem" pr="1rem">
                  <Typography
                    component="div"
                    variant="subtitle1"
                    color={theme.palette.primary.main}
                    // fontSize="0.8rem"
                    sx={{
                      fontSize: {
                        xs: "0.8rem",
                        sm: "0.8rem",
                        md: "0.8rem",
                        lg: "0.8rem",
                        xl: "1rem",
                      },
                    }}
                  >
                    {data.jobName}
                  </Typography>
                  <Typography
                    variant="caption"
                    component="div"
                    color={theme.palette.primary.light}
                    fontSize={"0.53rem"}
                    sx={{
                      fontSize: {
                        xs: "0.53rem",
                        sm: "0.53rem",
                        md: "0.53rem",
                        lg: "0.53rem",
                        xl: "0.69rem",
                      },
                    }}
                  >
                    {data.description}
                  </Typography>
                  <CardActions sx={sxCardActions}>
                    <StyledButton
                      size="small"
                      sx={{ color: data.color.orange }}
                    >
                      Remote
                    </StyledButton>
                    <StyledButton size="small" sx={{ color: data.color.green }}>
                      Full Time
                    </StyledButton>
                  </CardActions>
                </Box>
              </CardContent>
            </Box>
            {/* <CardHeader
              sx={sxCardicon}
              action={ */}
            <IconButton aria-label="settings" sx={sxIconButton}>
              <MoreHoriz sx={sxMoreHoriz} />
            </IconButton>
            {/* }
            /> */}
          </StyledCard>
        );
      })}

      <StyledCard
        sx={{
          maxHeight: "50px",
        }}
      >
        <StyledCardContent>
          <Stack justifyContent={"space-around"} alignItems={"flex-start"}>
            <CardMedia
              component="img"
              sx={sxCardImage}
              image={ui}
              alt="UI designer"
            />
          </Stack>
          <CardContent sx={sxCardData}>
            <Box pl="0.8rem" pr="1rem">
              <Typography
                component="div"
                variant="subtitle1"
                color={theme.palette.primary.main}
                sx={{
                  fontSize: {
                    xs: "0.8rem",
                    sm: "0.8rem",
                    md: "0.8rem",
                    lg: "0.8rem",
                    xl: "0.9rem",
                  },
                }}
              >
                Graphic Designer
              </Typography>
              <Typography
                variant="caption"
                component="div"
                color={theme.palette.primary.light}
                // fontSize={"0.53rem"}
                sx={{
                  fontSize: {
                    xs: "0.53rem",
                    sm: "0.53rem",
                    md: "0.53rem",
                    lg: "0.53rem",
                    xl: "0.69rem",
                  },
                }}
              >
                Soylent Corp
              </Typography>
            </Box>
          </CardContent>
        </StyledCardContent>

        <IconButton aria-label="settings" sx={sxIconButton}>
          <MoreHoriz sx={sxMoreHoriz} />
        </IconButton>
      </StyledCard>
      <Instructor />
      <VerticalBar />
    </StyledBox>
  );
};

export default RightBar;
