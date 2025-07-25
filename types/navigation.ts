// types/navigation.ts

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

/**
 * Defines the route names and expected parameters for each screen
 * in the navigation stack. All screens currently expect no params.
 */
export type RootStackParamList = {
  Register: undefined;
  VerifyInstructions: undefined;
  Login: undefined;
  JobList: undefined;
  CreateJob: undefined;
};

/** Navigation prop type for the Register screen */
export type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Register"
>;

/** Navigation prop type for the VerifyInstructions screen */
export type VerifyInstructionsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "VerifyInstructions"
>;

/** Navigation prop type for the Login screen */
export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

/** Navigation prop type for the JobList screen */
export type JobListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "JobList"
>;
