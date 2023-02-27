import { View, Text, Alert, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { useCurrentUser } from "../../context/UserContext.js";
import { Redirect, useNavigate, useParams } from "react-router-native";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { type } = useParams();
  const { user, setUser } = useCurrentUser();
  const navigate = useNavigate();

  if (user) {
    navigate("/loos");
  }

  const submitAuth = async (e) => {
    e.preventDefault();
    try {
      const newUser = await setUser(email, password, type);
      console.log("newUser", newUser);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        secureTextEntry={true}
        onChangeText={(e) => setPassword(e)}
        value={password}
        placeholder="Password"
      />
      <Button onPress={submitAuth} title="Press Me" />
    </View>
  );
}
