import dashBoard from "./dashboard.json";

export const dashBoardData: DashBoardType = dashBoard;

export interface DashBoardType {
  applicant: Applicantt[];
  profile: Profile[];
  interview: Intervieww[];
  job: Job[];
  board: Board[];
}

export interface Applicantt {
  id: number;
  title: string;
  total: number;
  months: string;
  progress: number;
  color: string;
}

export interface Board {
  id: number;
  image: string;
}

export interface Intervieww {
  id: number;
  picture: string;
  candidateName: string;
  postName: string;
  designation: string;
  time: string;
  status: string;
}

export interface Job {
  id: number;
  jobName: string;
  image: string;
  description: string;
  color: Color;
}

export interface Color {
  orange: string;
  green: string;
}

export interface Profile {
  id: number;
  profileColor: string;
  name: string;
  email: string;
  image: string;
}
