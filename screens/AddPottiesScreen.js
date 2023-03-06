import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { postReview } from "../services/loosServices.js";
import * as Location from "expo-location";
import { Marker } from "react-native-maps";
import makeMarker from "../components/Marker.js";

export default function AddPottiesScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [cleanliness, setCleanliness] = useState("");
  const [safety, setSafety] = useState("");
  const [accessibility, setAccessibility] = useState("");
  const [amenities, setAmenities] = useState("");
  const [comment, setComment] = useState("");
  const ratingData = [
    { key: "1", value: "1" },
    { key: "2", value: "2" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
  ];
  const cleanlinessData = [
    { key: "1", value: "1" },
    { key: "2", value: "2" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
  ];
  const safetyData = [
    { key: "1", value: "1" },
    { key: "2", value: "2" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
  ];
  const accessibilityData = [
    { key: "1", value: "1" },
    { key: "2", value: "2" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
  ];

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph} value={location}>
        {text}
      </Text>
      <TextInput
        style={styles.input}
        value={description}
        placeholder="Description"
        maxLength="150"
        onChangeText={(text) => setDescription(text)}
      />
      <Text>Rating</Text>
      <SelectList
        value={rating}
        title="Rating"
        setSelected={(val) => setRating(val)}
        data={ratingData}
      />
      <Text>Cleanliness</Text>
      <SelectList
        value={cleanliness}
        title="Cleanliness"
        setSelected={(val) => setCleanliness(val)}
        data={cleanlinessData}
      />
      <Text>Safety</Text>
      <SelectList
        value={safety}
        title="Safety"
        setSelected={(val) => setSafety(val)}
        data={safetyData}
      />
      <Text>Accessibility</Text>
      <SelectList
        value={accessibility}
        title="Accessibility"
        setSelected={(val) => setAccessibility(val)}
        data={accessibilityData}
      />
      <TextInput
        style={styles.input}
        value={amenities}
        placeholder="Amenities"
        maxLength="100"
        onChangeText={(text) => setAmenities(text)}
      />
      <TextInput
        style={styles.input}
        value={comment}
        placeholder="Comments"
        maxLength="250"
        onChangeText={(text) => setComment(text)}
      />
      <Button title="Submit" onPress={postReview} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: { height: 50, width: 200, borderColor: "black", borderWidth: 1 },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
