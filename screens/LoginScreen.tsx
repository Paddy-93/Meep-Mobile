// screens/LoginScreen.tsx

import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '../types/navigation';

/**
 * LoginScreen component allows users to input their credentials
 * and attempt to log in. Navigation is available through useNavigation.
 */
export default function LoginScreen() {
    const navigation = useNavigation<LoginScreenNavigationProp>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        // TODO: Implement login logic (API call, token handling, navigation)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            className="flex-1 bg-gray-900 justify-center px-6"
        >
            <View className="mb-10">
                <Text className="text-yellow-400 text-2xl font-bold text-center">Log In</Text>
            </View>

            <TextInput
                className="bg-white rounded-lg p-4 mb-4"
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
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

            <TouchableOpacity
                className="bg-yellow-400 rounded-lg p-4 mt-2"
                onPress={handleLogin}
                disabled={loading}
            >
        <Text className="text-center font-bold text-gray-900">
          {loading ? 'Logging In...' : 'Log In'}
        </Text>
      </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}