import { Stack } from "@mui/material";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import { StyledBox } from "./styles/AppStyle";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledBox>
        <Header />
        <Stack
          direction="row"
          justifyContent="space-around"
          flexWrap={"wrap"}
          alignItems="flex-start"
          width="90vw"
          margin="auto"
          flex="4"
        >
          <Navbar />
          <Feed />
          <RightBar />
        </Stack>
      </StyledBox>
    </ThemeProvider>
  );
}

export default App;
