import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const addPotty = ({ navigation }) => {
  navigation.navigate("Add a Potty");
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome Looser!</Text>
      <MapView
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 45.5173,
          longitude: -122.6836,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Button title="Add Potty" onPress={addPotty}></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  mapStyle: {
    position: "absolute",
    top: 80,
    left: 10,
    right: 10,
    bottom: 200,
    borderWidth: 3,
    borderColor: "goldenrod",
  },
  textStyle: {
    position: "absolute",
  },
});
