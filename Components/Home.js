import { View, Text } from "react-native";
import React from "react";
import { useCurrentUser } from "../context/UserContext.js";

export default function Home() {
  const { user } = useCurrentUser();
  return (
    <View>
      <Text>Welcome Looser!</Text>
    </View>
  );
}
