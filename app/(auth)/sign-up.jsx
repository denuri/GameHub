import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName || !lastName || !username || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    alert("User Registered successfully");
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-primary px-6">
      <ScrollView
        className="flex-1 bg-primary"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-white text-4xl font-extrabold text-center mb-8">
          Register
        </Text>

        <View className="w-full mb-4">
          <Text className="text-white mb-2 text-base font-medium">
            First Name
          </Text>
          <TextInput
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Enter your first name"
            placeholderTextColor="#aaa"
            className="bg-white text-black px-5 py-4 rounded-lg text-base shadow-lg border border-gray-300"
          />
        </View>

        <View className="w-full mb-4">
          <Text className="text-white mb-2 text-base font-medium">
            Last Name
          </Text>
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            placeholder="Enter your last name"
            placeholderTextColor="#aaa"
            className="bg-white text-black px-5 py-4 rounded-lg text-base shadow-lg border border-gray-300"
          />
        </View>

        <View className="w-full mb-4">
          <Text className="text-white mb-2 text-base font-medium">
            Username
          </Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Choose a username"
            placeholderTextColor="#aaa"
            className="bg-white text-black px-5 py-4 rounded-lg text-base shadow-lg border border-gray-300"
          />
        </View>

        <View className="w-full mb-4">
          <Text className="text-white mb-2 text-base font-medium">Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email address"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            className="bg-white text-black px-5 py-4 rounded-lg text-base shadow-lg border border-gray-300"
          />
        </View>

        <View className="w-full mb-4">
          <Text className="text-white mb-2 text-base font-medium">
            Password
          </Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Create a password"
            placeholderTextColor="#aaa"
            secureTextEntry
            className="bg-white text-black px-5 py-4 rounded-lg text-base shadow-lg border border-gray-300"
          />
        </View>

        <TouchableOpacity
          onPress={handleRegister}
          className="bg-secondary w-full py-4 rounded-full shadow-md mt-6"
        >
          <Text className="text-white text-lg font-semibold text-center">
            Register
          </Text>
        </TouchableOpacity>

        <View className="flex-row items-center justify-center mt-8 mb-24">
          <Text className="mr-2 text-lg text-white">Already registered ? </Text>
          <Pressable onPress={() => router.back()}>
            <Text className="font-bold text-blue-200 text-lg">Log in</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
