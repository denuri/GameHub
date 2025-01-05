import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
} from "react-native";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/sign-in");
  };

  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      className="flex-1 justify-center"
      resizeMode="cover"
    >
      <View className="absolute inset-0 bg-black opacity-70" />

      <SafeAreaView className="flex-1 items-center justify-center">
        <Text className="text-white text-4xl font-bold mb-4">GameHub</Text>
        <Text className="text-white text-lg text-center px-8 mb-8">
          Discover the latest gaming details and stay connected with the gaming
          community.
        </Text>
        <TouchableOpacity
          onPress={handleGetStarted}
          className="bg-secondary px-8 py-4 rounded-full"
        >
          <Text className="text-white text-lg font-semibold">Get Started</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Index;
