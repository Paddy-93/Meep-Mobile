// utils/validator.ts

/**
* Validates that an email address is in proper format.
*/
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
* Validates that a phone number matches E.164 format (e.g., +123456789).
*/
export const validatePhoneNumber = (phone: string): boolean => {
  //  /^\+?[1-9]\d{7,14}$/; // Accepts E.164 format
  return /^\+?[1-9]\d{7,14}$/.test(phone);
};

 /**
   * Validates a password against several rules:
   * - At least 8 characters
   * - Contains uppercase, lowercase, number, and special character
   * Returns each rule with a `passed` status for UI feedback.
   */
export const validatePassword = (password: string): { label: string; passed: boolean }[] => {
  const passwordRules = [
    { label: 'At least 8 characters', test: (pw: string) => pw.length >= 8 },
    { label: 'One uppercase letter (A–Z)', test: (pw: string) => /[A-Z]/.test(pw) },
    { label: 'One lowercase letter (a–z)', test: (pw: string) => /[a-z]/.test(pw) },
    { label: 'One number (0–9)', test: (pw: string) => /[0-9]/.test(pw) },
    { label: 'One special character (!@#$%^&*-)', test: (pw: string) => /[!@#$%^&*-]/.test(pw) },
  ];
  return passwordRules.map(rule => ({
    label: rule.label,
    passed: rule.test(password),
  }));
};

/**
 * Checks if two passwords match.
 */
export const passwordsMatch = (pw1: string, pw2: string): boolean => pw1 === pw2;

/**
* Returns true only if all password rules are passed.
*/
export const isPasswordValid = (password: string): boolean => {
  return validatePassword(password).every(rule => rule.passed);
};

/**
 * Ensures a string is non-empty after trimming.
 */
export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

