// types/env.d.ts

/**
 * Type declarations for environment variables loaded via the @env module.
 * 
 * These are injected at build time using a tool like `react-native-dotenv`.
 * Update this file to reflect the actual variables in your `.env` file.
 */
declare module "@env" {
  /**
   * The base URL for backend API requests.
   * Example: "https://api.example.com"
   */
  export const API_BASE_URL: string;

  /**
   * Additional API URL.
   */
  export const API_URL: string;

  
}
