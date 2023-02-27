import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import AuthForm from "./Components/Auth/AuthForm.js";
import Home from "./Components/Home.js";
import { UserProvider } from "./context/UserContext.js";

export default function App() {
  return (
    <UserProvider>
      <NativeRouter>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Routes>
            <Route path="/auth/:type" element={<AuthForm />} />
            <Route path="/loos" element={<Home />} />
          </Routes>
        </View>
      </NativeRouter>
    </UserProvider>
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
