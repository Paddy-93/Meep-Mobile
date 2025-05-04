import axios from "axios";
import { API_URL } from "@env"; // Ensure @env module is properly typed
console.log("Loaded API_URL:", API_URL);

export const fetchJobs = async () => {
  console.log;
  ("Fetching jobs from API...");
  const response = await axios.get(`${API_URL}/jobs/`);
  return response.data;
};
