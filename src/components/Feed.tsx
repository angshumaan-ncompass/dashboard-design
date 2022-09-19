import { Box } from "@mui/material";
import {
  StyleBackgroundColorCircle,
  StyleDot,
  StyledButton,
  StyledCard,
  StyledCardData,
  StyledCardTypography,
  StyledCircle,
  StyledContent,
  StyledHeader,
  StyledImage,
  StyledItem,
  StyledList,
  StyledSvg,
  sxBox,
  StyledH4,
} from "../styles/FeedStyle";
import Applicant from "../views/Applicant";
import Interview from "../views/Interview";
import { dashBoardData, Profile } from "../Api";

const Feed = () => {
  return (
    <Box
      flex={4}
      pt={2}
      pb={2}
      pr={0.5}
      width="100%"
      sx={sxBox}
      borderRadius="10px"
    >
      <Applicant />
      <StyledCard>
        <StyledHeader>
          {dashBoardData.profile.map((data: Profile) => {
            return (
              <StyledContent>
                <StyledList>
                  <StyledItem>
                    <StyleDot
                      sx={{
                        "&::before": {
                          backgroundColor: data.profileColor,
                        },
                      }}
                    ></StyleDot>
                    <StyledSvg>
                      <StyledCircle
                        style={{ stroke: data.profileColor }}
                        cx="3.5rem"
                        cy="3.5rem"
                        r="2.9rem"
                      ></StyledCircle>
                    </StyledSvg>

                    <StyleBackgroundColorCircle
                      style={{ backgroundColor: data.profileColor }}
                    >
                      <StyledImage src={data.image} />
                    </StyleBackgroundColorCircle>
                  </StyledItem>

                  <StyledCardData>
                    <StyledH4>{data.name}</StyledH4>
                    <StyledCardTypography>{data.email}</StyledCardTypography>
                    <StyledCardTypography>
                      Total Points 530
                    </StyledCardTypography>
                  </StyledCardData>
                  <StyledButton>View Details</StyledButton>
                </StyledList>
              </StyledContent>
            );
          })}
        </StyledHeader>
      </StyledCard>
      <Interview />
    </Box>
  );
};
export default Feed;
