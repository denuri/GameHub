import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import { increment } from "../redux/slices/counterSlice";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [platforms, setPlatforms] = useState([]);
  const params = useLocalSearchParams();

  const username = params.username;
  const clickCount = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increment());
  };

  useEffect(() => {
    const fetchPlatforms = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          "https://api.rawg.io/api/platforms?key=14de70e0c91e47e1a7d0772fe440c65a"
        );
        if (data?.results) {
          setPlatforms(data.results);
        } else {
          throw new Error("Invalid data format received");
        }
      } catch (err) {
        console.error("Error fetching data:", err.message || err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlatforms();
  }, []);

  const renderPlatformCard = useCallback(
    ({ item }) => (
      <TouchableOpacity
        className="bg-white rounded-lg shadow-lg mb-4 w-full"
        onPress={handleClick}
      >
        <Image
          source={{ uri: item.image_background }}
          className="h-48 w-full rounded-t-lg"
          resizeMode="cover"
        />
        <View className="p-4">
          <Text className="text-xl font-bold text-black mb-2">{item.name}</Text>
          <Text className="text-gray-600 mb-2">
            Games Count: {item.games_count}
          </Text>
          <Text className="text-gray-500 text-sm">
            Featured:{" "}
            {item.games
              .slice(0, 2)
              .map((game) => game.name)
              .join(", ")}
          </Text>
        </View>
      </TouchableOpacity>
    ),
    [handleClick]
  );

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="bg-secondary py-4 px-6">
        <Text className="text-white text-2xl font-bold">
          Welcome, {username}
        </Text>
        <Text className="text-gray-300 text-sm">Clicks: {clickCount}</Text>
      </View>
      <View className="flex-1 p-4">
        {isLoading ? (
          <ActivityIndicator size="large" color="#ffffff" className="mt-16" />
        ) : (
          <FlatList
            data={platforms}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderPlatformCard}
            contentContainerStyle={{ paddingBottom: 16 }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
      <TouchableOpacity
        className="absolute bottom-8 right-8 bg-secondary px-6 py-4 rounded-full flex items-center justify-center"
        onPress={() => alert(`You clicked ${clickCount} times!`)}
      >
        <Text className="text-white font-bold text-2xl">{clickCount}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
