// screens/RegisterScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  validateEmail,
  validatePassword,
  validateRequired,
  passwordsMatch,
  isPasswordValid,
} from '../utils/validator';
import { useNavigation } from '@react-navigation/native';
import { RegisterScreenNavigationProp } from '../types/navigation';
import { registerUser } from '../api/auth';
import { mapErrorToMessage } from '../utils/errorHelpers';


/**
 * User registration screen for both PASSENGER and BUSINESS roles.
 * Includes input validation, password rules, and error handling.
 */
export default function RegistrationScreen() {
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  // Form state
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<'BUSINESS' | 'PASSENGER'>('BUSINESS');
  const [loading, setLoading] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  //const [emailError, setEmailError] = useState<string | null>(null);

  /**
   * Handles registration logic and API call.
   */
  const handleRegister = async () => {
    // Basic field validations
    if (
      !validateRequired(firstName) ||
      !validateRequired(lastName) ||
      !validateRequired(email) ||
      !validateRequired(phoneNumber) ||
      !validateRequired(password) ||
      !validateRequired(confirmPassword)
    ) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    // Email validation
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      //setEmailError('Please enter a valid email address.');
      return;
    }

    // Password validation
    if (!isPasswordValid(password)) {
      Alert.alert('Password Error', 'Password does not meet all the requirements.');
      return;
    }

    // Confirm password match
    if (!passwordsMatch(password, confirmPassword)) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    if (role === 'BUSINESS' && !companyName.trim()) {
      return Alert.alert('Missing Company Name', 'Company name is required for business accounts.');
    }

    try {
      setLoading(true);

      const payload = {
        email,
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        password,
        role,
        company_name: role === 'BUSINESS' ? companyName.trim() : '',
      };

      await registerUser(payload);

      Alert.alert('Success', 'Check your email for verification', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('VerifyInstructions'),
        },
      ]);
    } catch (err: any) {
      console.error('Registration error:', err?.response?.data || err.message);
      const data = err?.response?.data;
      const errors = data?.errors || data;
      if (errors && typeof errors === 'object') {
        const friendlyMessage = mapErrorToMessage(errors);
        return Alert.alert('Registration Failed', friendlyMessage);
      }
      Alert.alert('Registration Failed', 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const passwordValidationStatus = validatePassword(password);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1 bg-gray-900 justify-center px-6"
    >
      <View className="mb-10">
        <Text className="text-yellow-400 text-2xl font-bold text-center">Create an Account</Text>
      </View>

      {/* Input fields */}
      <TextInput
        className="bg-white rounded-lg p-4 mb-4"
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      {/* {emailError && (
        <Text style={{ color: 'red', fontSize: 12 }}>{emailError}</Text>
      )} */}
      <TextInput
        className="bg-white rounded-lg p-4 mb-4"
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        className="bg-white rounded-lg p-4 mb-4"
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        className="bg-white rounded-lg p-4 mb-4"
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <TextInput
        className="bg-white rounded-lg p-4 mb-2"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        onFocus={() => setPasswordFocused(true)}
        onBlur={() => setPasswordFocused(false)}
      />

      {/* Password rule checklist */}
      {passwordFocused && (
        <View className="mb-4 pl-2">
          {passwordValidationStatus.map((rule, index) => (
            <Text
              key={index}
              className={`text-sm ${
                rule.passed ? 'text-green-400' : 'text-gray-400'
              }`}
            >
              {rule.passed ? '✓' : '•'} {rule.label}
            </Text>
          ))}
        </View>
      )}

      <TextInput
        className="bg-white rounded-lg p-4 mb-4"
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Role selector */}
      <View className="flex-row justify-center mb-4">
        {['BUSINESS', 'PASSENGER'].map((r) => (
          <TouchableOpacity
            key={r}
            className={`px-4 py-2 mx-2 rounded-full border ${
              role === r ? 'bg-yellow-400 border-yellow-400' : 'border-white'
            }`}
            onPress={() => setRole(r as 'BUSINESS' | 'PASSENGER')}
          >
            <Text
              className={`font-bold ${
                role === r ? 'text-black' : 'text-white'
              }`}
            >
              {r.charAt(0) + r.slice(1).toLowerCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {role === 'BUSINESS' && (
        <TextInput
          className="bg-white rounded-lg p-4 mb-4"
          placeholder="Company Name"
          value={companyName}
          onChangeText={setCompanyName}
        />
      )}

      {/* Submit button */}
      <TouchableOpacity
        className="bg-yellow-400 rounded-lg p-4 mt-2"
        onPress={handleRegister}
        disabled={loading}
      >
        <Text className="text-center font-bold text-gray-900">
          {loading ? 'Registering...' : 'Register'}
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
