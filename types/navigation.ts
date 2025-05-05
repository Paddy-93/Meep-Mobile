import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  JobList: undefined;
  CreateJob: undefined;
};

export type JobListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "JobList"
>;
