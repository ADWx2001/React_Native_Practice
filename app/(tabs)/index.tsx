import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";

export default function HomeScreen() {
 
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl text-center pt-10 font-pextrabold">Aura</Text>
      <StatusBar style="auto" />
    </View>   
  );
}


