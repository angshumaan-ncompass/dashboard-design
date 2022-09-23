import { Box, Stack, Typography } from "@mui/material";
import { theme } from "../theme";
import { Applicantt } from "../Api";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import {
  StyledBox,
  StyledCard,
  StyledCircularProgress,
} from "../styles/ApplicantStyle";
import { useState, useEffect } from "react";

const Applicant: React.FC = () => {
  const [applicant, setApplicant] = useState<any>([]);
  const applicantCollectionRef = collection(db, "applicant");

  useEffect(() => {
    const getApplicant = async () => {
      const data = await getDocs(applicantCollectionRef);
      setApplicant(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getApplicant();
  }, [applicantCollectionRef]);

  return (
    <StyledCard
      sx={{
        flex: {
          xs: "0 ",
          sm: "0",
          md: "2",
          lg: "2",
          xl: "2",
        },
      }}
    >
      {applicant.map((data: Applicantt) => {
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
                sx={{
                  color: theme.palette.primary.light,
                  fontSize: {
                    xs: "0.7rem",
                    sm: "0.7rem",
                    md: "0.7rem",
                    lg: "0.7rem",
                    xl: "1rem",
                  },
                }}
              >
                {data.title}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: {
                    xs: "1.3rem",
                    sm: "1.3rem",
                    md: "1.3rem",
                    lg: "1.3rem",
                    xl: "2rem",
                  },
                }}
              >
                {data.total}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.primary.light,
                  fontSize: {
                    xs: "0.7rem",
                    sm: "0.7rem",
                    md: "0.7rem",
                    lg: "0.7rem",
                    xl: "1rem",
                  },
                }}
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
