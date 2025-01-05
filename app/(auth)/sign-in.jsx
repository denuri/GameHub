import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      router.push({
        pathname: "/home",
        params: {
          username: username,
        },
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-primary items-center justify-center px-6">
      <Text className="text-white text-4xl font-extrabold mb-10">Sign In</Text>

      <View className="w-full mb-6">
        <Text className="text-white mb-3 text-base font-medium">Username</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
          placeholderTextColor="#ccc"
          className="bg-white text-gray px-5 py-4 rounded-lg text-base shadow-lg border border-gray-600 focus:border-accent"
        />
      </View>

      <View className="w-full mb-8">
        <Text className="text-white mb-3 text-base font-medium">Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          placeholderTextColor="#ccc"
          secureTextEntry
          className="bg-white text-gray px-5 py-4 rounded-lg text-base shadow-lg border border-gray-600 focus:border-accent"
        />
      </View>

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-secondary w-full py-4 rounded-full shadow-md"
      >
        <Text className="text-white text-lg font-semibold text-center">
          Login
        </Text>
      </TouchableOpacity>
      <View className="flex-row items-center justify-center mt-8 mb-24">
        <Text className="mr-2 text-lg text-white">New to GameHub?</Text>
        <Pressable onPress={() => router.push("/sign-up")}>
          <Text className="font-bold text-blue-200 text-lg">Register here</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
