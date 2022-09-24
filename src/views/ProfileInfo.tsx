import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dashBoardData, Profile } from "../Api";
import { db } from "../firebase-config";
import {
  StyleBackgroundColorCircle,
  StyledButton,
  StyledCard,
  StyledCardData,
  StyledCardTypography,
  StyledCircle,
  StyledContent,
  StyledH4,
  StyledHeader,
  StyledImage,
  StyledItem,
  StyledList,
  StyleDot,
  StyledSvg,
} from "../styles/ProfileStyle";

const ProfileInfo: React.FC = () => {
  const [profile, setProfile] = useState<any>([]);
  const profileCollectionRef = collection(db, "profile");

  useEffect(() => {
    const getProfile = async () => {
      const data = await getDocs(profileCollectionRef);
      setProfile(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProfile();
  }, [profileCollectionRef]);
  return (
    <StyledCard
      sx={{
        height: {
          xs: "auto",
          sm: "50%",
        },

        flex: {
          xs: "0",
          sm: "0",
          md: "5",
          lg: "5",
          xl: "5",
        },
      }}
    >
      <StyledHeader>
        {dashBoardData.profile.map((data: Profile) => {
          return (
            <StyledContent
              sx={{
                height: {
                  xs: "auto",
                  sm: "100%",
                },
              }}
            >
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

                <StyledCardData
                  sx={{
                    fontSize: {
                      xs: "0.9rem",
                      sm: "0.9rem",
                      md: "0.9rem",
                      lg: "1.2rem",
                      xl: "1.2rem",
                    },
                  }}
                >
                  <StyledH4
                    sx={{
                      fontSize: {
                        xs: "0.9rem",
                        sm: "0.9rem",
                        md: "0.9rem",
                        lg: "1.2rem",
                        xl: "1.2rem",
                      },
                    }}
                  >
                    {data.name}
                  </StyledH4>
                  <StyledCardTypography>{data.email}</StyledCardTypography>
                  <StyledCardTypography>Total Points 530</StyledCardTypography>
                </StyledCardData>
                <StyledButton
                  sx={{
                    fontSize: {
                      xs: 14,
                    },
                  }}
                >
                  View Details
                </StyledButton>
              </StyledList>
            </StyledContent>
          );
        })}
      </StyledHeader>
    </StyledCard>
  );
};

export default ProfileInfo;
