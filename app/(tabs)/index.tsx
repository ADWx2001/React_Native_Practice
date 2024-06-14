import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View >
      <Text className="text-3xl text-center pt-10 text-rose-600">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>   
  );
}


