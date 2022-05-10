import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import addnew from "./screens/addnew";
import ViewDevices from "./screens/ViewDevices";
import SwitchDevice from "./screens/SwitchDevice";
import Detail from "./screens/Detail";
import DeviceProvide from "./context/DeviceContext";

const Stack = createNativeStackNavigator();
// const [light, setLight] = useState();

// useEffect;

export default function App() {
  return (
    <DeviceProvide>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="ViewDevices"
            component={ViewDevices}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="addnew"
            component={addnew}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Detail"
            component={Detail}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Dashboard"
            component={Dashboard}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DeviceProvide>
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
