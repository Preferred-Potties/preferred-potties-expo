import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Link, NativeRouter, Route, Routes } from "react-router-native";
import AuthForm from "./Components/Auth/AuthForm.js";
import Home from "./Components/Home.js";
import { UserProvider } from "./context/UserContext.js";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
      <NavigationContainer>
    <UserProvider>
      <NativeRouter>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Routes>
            <Route exact path='/'></Route>
            <Route path="/auth/:type" element={<AuthForm />} />
            <Route path="/loos" element={<Home />} />
          </Routes>
        </View>
      </NativeRouter>
    </UserProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
