import { View, Text, FlatList } from "react-native";
import "nativewind"; // required for className to work
import "./global.css";

const jobs = [
  { id: "1", pickup: "Downtown", dropoff: "Airport", fare: "$35" },
  { id: "2", pickup: "Hotel Plaza", dropoff: "Central Park", fare: "$20" },
  { id: "3", pickup: "Trfin Station", dropoff: "Museum", fare: "$15" },
];

export default function App() {
  return (
    <View className="flex-1 bg-white pt-16 px-4">
      <Text className="text-2xl font-bold mb-6">Surplus Jobs</Text>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-gray-100 rounded-lg p-4 mb-4">
            <Text className="text-base font-medium">Pickup: {item.pickup}</Text>
            <Text className="text-base">Dropoff: {item.dropoff}</Text>
            <Text className="text-green-600 font-semibold">
              Fare: {item.fare}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
