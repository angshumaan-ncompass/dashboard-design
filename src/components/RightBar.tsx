import React, { useEffect, useState } from "react";
import ui from "../assets/images/ui.png";
import { MoreHoriz } from "@mui/icons-material";
import { theme } from "../theme";
import { Job } from "../Api";
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
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const RightBar: React.FC = () => {
  const [job, setJob] = useState<any>([]);
  const jobCollectionRef = collection(db, "job");

  useEffect(() => {
    const getJob = async () => {
      const data = await getDocs(jobCollectionRef);
      setJob(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getJob();
  }, []);
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
      {job.map((data: Job) => {
        return (
          <StyledCard key={data.id}>
            <Box sx={sxBox}>
              <Stack
                justifyContent={"space-around"}
                flexDirection={"row"}
                alignItems={"flex-start"}
                flexWrap={"wrap"}
                // pt={"15px"}
                height="100%"
              >
                <CardMedia
                  component="img"
                  sx={sxCardMedia}
                  image={data.image}
                  alt="UI designer"
                />
              </Stack>
              <CardContent sx={sxCardContent}>
                <Box>
                  <Typography
                    component="div"
                    variant="subtitle1"
                    color={theme.palette.primary.main}
                    fontSize="0.8rem"
                  >
                    {data.jobName}
                  </Typography>
                  <Typography
                    variant="caption"
                    component="div"
                    color={theme.palette.primary.light}
                    fontSize={"0.53rem"}
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

      <StyledCard sx={{ maxHeight: "50px" }}>
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
            <Box>
              <Typography
                component="div"
                variant="subtitle1"
                color={theme.palette.primary.main}
                fontSize={"0.8rem"}
              >
                Graphic Designer
              </Typography>
              <Typography
                variant="caption"
                component="div"
                color={theme.palette.primary.light}
                fontSize={"0.53rem"}
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