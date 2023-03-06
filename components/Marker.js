import { View } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";

export default function Marker(location) {
  return (
    <View>
      <Marker coordinate={(location.latitude, location.longitude)} />
    </View>
  );
}
