import { Box } from "@mui/material";
import { sxBox } from "../styles/FeedStyle";
import Applicant from "../views/Applicant";
import Interview from "../views/Interview";
import ProfileInfo from "../views/ProfileInfo";

const Feed = () => {
  return (
    <Box
      flex={4}
      pt={"1rem"}
      pb={"1rem"}
      pr={"1rem"}
      width="90vw"
      sx={sxBox}
      borderRadius="10px"
      // height="90vh"
    >
      <Applicant />
      <ProfileInfo />
      <Interview />
    </Box>
  );
};
export default Feed;
