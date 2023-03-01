import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./screens/SignUpScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import LoginInScreen from "./screens/LoginScreen.js";
import { useCurrentUser, UserProvider } from "./context/UserContext.js";
import { enableLatestRenderer } from "react-native-maps";
import AddPottiesScreen from "./screens/AddPottiesScreen.js";

enableLatestRenderer();

const Stack = createNativeStackNavigator();

function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Sign In" component={LoginInScreen} />
    </Stack.Navigator>
  );
}

function Authenticated() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome to Loocater!" component={HomeScreen} />
      <Stack.Screen name="Add a Potty!" component={AddPottiesScreen} />
    </Stack.Navigator>
  );
}

function Navigate() {
  const { user } = useCurrentUser();
  return (
    <NavigationContainer>
      {!user && <Auth />}
      {user && <Authenticated />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <View>
      <UserProvider>
        <Navigate />
      </UserProvider>
    </View>
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
