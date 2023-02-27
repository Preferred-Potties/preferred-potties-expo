import { View, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { useCurrentUser } from "../../context/UserContext.js";
import { useNavigate, useParams } from "react-router-native";
import { authUser } from "../../services/authServices.js";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ type, setType ] = useState('');
  const { user, setUser } = useCurrentUser();
  const navigate = useNavigate();

  if (user) {
    navigate("/loos");
  }

  const submitAuth = async (e) => {
    e.preventDefault();
    try {
      const newUser = await authUser(email, password, type);
      setUser(newUser);
      console.log(user, "user");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
  <View>
      <Link to='/sign-up' onPress={setType('sign-up')}>
            <Text>Sign-Up</Text>
          </Link>
          <Link to='/sign-in' onPress={setType('sign-in')}>
            <Text>Sign-In</Text>
          </Link>
      </View>
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
    </View>
  );
}