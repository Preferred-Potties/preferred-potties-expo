import { View, Text } from "react-native";
import React from "react";
import { useCurrentUser } from "../context/UserContext.js";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function HomeScreen() {
  const { user } = useCurrentUser;
  return (
    <View>
      <MapView
        initialRegion={{
          provider: { PROVIDER_GOOGLE },
          latitude: 45.5173,
          longitude: -122.6836,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Text>Welcome Looser!</Text>
    </View>
  );
}
