import { View, Text, Alert, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { useCurrentUser } from "../../context/UserContext.js";
import { Redirect, useParams } from "react-router-native";
import { signUp } from "../services/authServices.js";

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
      <TextInput
        onChangeText={(e) => setEmail(e.target.value)}
        placeholder="Email"
        value={email}
      />
      <TextInput
        secureTextEntry={true}
        onChangeText={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Password"
      />
      <Button onPress={signUp} title="Press Me" />
    </View>
  );
}
