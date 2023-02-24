import { View, Text, Alert, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { useCurrentUser } from "../../context/UserContext.js";
import { Redirect, useParams } from "react-router-native";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { type } = useParams();
  const { user, useUser } = useCurrentUser();

  if (user) {
    return <Redirect to="/api/v1/loos" />;
  }

  const submitAuth = async (e) => {
    e.preventDefault();
    try {
      const newUser = await authUser(email, password, type);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" />
      <TextInput secureTextEntry={true} placeholder="Password" />
      <Button
        onPress={() => Alert.alert("You pressed the button!")}
        title="Press Me"
      />
    </View>
  );
}
