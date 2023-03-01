import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-web";

export default function AddPottiesScreen() {
  return (
    <View>
      <Text>Add a Potty</Text>
      <Picker>
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>
      <Picker>
        {" "}
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>
      <Picker>
        {" "}
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
      </Picker>
      <TextInput label="Amenities" maxLength="100"></TextInput>
      <TextInput label="Comments" maxLength="250"></TextInput>
    </View>
  );
}
