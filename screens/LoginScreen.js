import { View, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { signIn } from "../services/authServices.js";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        onChangeText={(e) => setEmail(e.target.value)}
        placeholder="Email"
        value={email} 
        style={styles.input}
      />
      <TextInput
        secureTextEntry={true}
        onChangeText={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Password"
        style={styles.input}
      />
      <Button onPress={submitAuth} title="Sign In" />
    </View>
  );

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
}
