// api/auth.ts

import axios from 'axios';
import { API_BASE_URL } from '@env';

/**
 * Payload structure for user registration.
 */
export interface RegisterPayload {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  password: string;
  role: 'PASSENGER' | 'BUSINESS';
  company_name?: string;// Only used for BUSINESS role
}

/**
 * Registers a new user by sending their information to the backend.
 * 
 * @param payload - Registration information
 * @returns Response data from the server
 * @throws Error if the request fails
 */
export const registerUser = async (payload: RegisterPayload) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/register/`, payload);
    return response.data;
  } catch (error: any) {
    console.error('Network or server error:', error);
    throw error;
  }
}

/**
 * Triggers the backend to resend a verification email.
 * 
 * @param email - The user's email address
 * @returns Detail message from the server
 * @throws Error with a descriptive message if the request fails
 */
export const resendVerificationEmail = async (email: string): Promise<string> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/resend-verification-email/`, { email });
    return response.data.detail;
  } catch (error: any) {
    const message = error.response?.data?.detail || 'Failed to resend verification email.';
    throw new Error(message);
  }
};
