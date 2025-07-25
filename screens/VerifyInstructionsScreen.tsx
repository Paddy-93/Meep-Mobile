// screens/VerifyInstructionsScreen.tsx

import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { VerifyInstructionsScreenNavigationProp } from '../types/navigation';
// import { resendVerificationEmail } from '../api/auth';

/**
 * Screen displayed after registration to instruct users
 * to verify their email address via the verification link sent.
 * 
 * Provides options to resend verification email or go back to login.
 */
export default function VerifyInstructionsScreen() {
  const navigation = useNavigation<VerifyInstructionsScreenNavigationProp>();

  /**
   * Handler for resending the verification email.
   * TODO: Uncomment and implement actual resend logic.
   */
  const handleResend = async () => {
    try {
      // Uncomment and pass the user's email once available
      // await resendVerificationEmail({ email });
      Alert.alert('Verification Email Sent', 'Check your inbox and spam folder.');
    } catch (error) {
      Alert.alert('Error', 'Failed to resend verification email.');
    }
  };

  /**
   * Navigates user back to the login screen.
   */
  const handleBackToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View className="flex-1 bg-white px-6 py-12 justify-center">
      <Text className="text-3xl font-bold text-center mb-4">
        Verify Your Email
      </Text>
      <Text className="text-base text-gray-700 text-center mb-6">
        We've sent a verification link to your email address. Please check your inbox and follow the instructions.
      </Text>

      <Pressable
        onPress={handleResend}
        className="bg-yellow-500 rounded-md py-3 px-6 mx-auto mb-4"
      >
        <Text className="text-white font-semibold text-center">
          Resend Verification Email
        </Text>
      </Pressable>

      <Pressable
        onPress={handleBackToLogin}
        className="bg-gray-700 rounded-md py-3 px-6 mx-auto"
      >
        <Text className="text-white font-semibold text-center">
          Back to Login
        </Text>
      </Pressable>
    </View>
  );
}
