import _ from "lodash";
import {
  Help,
  Home,
  Message,
  Person,
  ReportSharp,
  Schedule,
} from "@mui/icons-material";
const navItems: string[] = [
  "Home",
  "Candidates",
  "Message",
  "Schedule",
  "Reports",
  "Help",
];
const icons: JSX.Element[] = [
  <Home />,
  <Person />,
  <Message />,
  <Schedule />,
  <ReportSharp />,
  <Help />,
];

export const listItems = _.zip(icons, navItems);
