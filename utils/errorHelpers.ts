// utils/errorHelpers.ts

/**
* Converts backend validation errors into friendly messages.
*/
export const mapErrorToMessage = (errors: Record<string, string | string[]>) => {
    if (!errors) return 'Something went wrong. Please try again.';
    const flatErrors = Object.entries(errors).map(([key, value]) => {
      const message = Array.isArray(value) ? value[0] : value;
      if (key === 'email' && /already|exists/i.test(message)) {
        return 'That email address is already in use. Try signing in or using another email.';
      }
      if (key === 'username' && /already|exists/i.test(message)) {
        return 'That username is already taken. Please choose a different one.';
      }
      if (/password/i.test(key) && /short|weak/i.test(message)) {
        return 'Your password should be stronger or longer.';
      }
      if (/phone/i.test(key) && /must|format/i.test(message)) {
        return 'Please enter a valid phone number (+9999999999).';
      }
      if (/required/i.test(message)) {
        return 'Please fill out all required fields.';
      }
      return 'Please check your input and try again.';
    });

    return flatErrors.join('\n');
};