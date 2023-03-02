import { View, Button, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { signIn } from "../services/authServices.js";
import { useCurrentUser } from "../context/UserContext.js";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useCurrentUser();

  const submitAuth = async (e) => {
    e.preventDefault();
    try {
      const newUser = await signIn(email, password);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        value={email}
      />
      <TextInput
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Password"
      />
      <Button onPress={submitAuth} title="Sign In" />
    </View>
  );
}
