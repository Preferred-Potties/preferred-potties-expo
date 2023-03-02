import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { Button } from "react-native-web";

export default function AddPottiesScreen() {
  const [cleanliness, setCleanliness] = useState("");
  const [safety, setSafety] = useState("");
  const [accessibility, setAccessibility] = useState("");
  const [amenities, setAmenities] = useState("");
  const [comment, setComment] = useState("");
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

  return (
    <View style={styles.container}>
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
      <Button title="Submit" onPress={(e) => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: { height: 100, width: 200, borderColor: "black", borderWidth: 1 },
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

/* <Picker style={styles.picker}>
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>
      <Picker>
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>
      <Picker>
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>
      <Picker>
        <Picker.Item label="Yes" value="true" />
        <Picker.Item label="No" value="false" />
      </Picker>
      <Picker>
        <Picker.Item label="Yes" value="true" />
        <Picker.Item label="No" value="false" />
      </Picker>
      <Picker>
        <Picker.Item label="Yes" value="true" />
        <Picker.Item label="No" value="false" />
      </Picker> */
