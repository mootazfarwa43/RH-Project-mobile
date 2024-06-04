const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SignUp from "./screens/SignUp";
import Signup1 from "./screens/Signup1";
import SuccessScreen from "./screens/SuccessScreen";
import HomeIZIP from "./screens/HomeIZIP";
import AjouterUnEmploy from "./screens/AjouterUnEmploy";
import AjouterUnEmploy1 from "./screens/AjouterUnEmploy1";
import AjouterUnEmploy2 from "./screens/AjouterUnEmploy2";
import AjouterUnEmploy3 from "./screens/AjouterUnEmploy3";
import GestionDeVariablesDePaies from "./screens/GestionDeVariablesDePaies";
import Notification1 from "./screens/Notification1";
import Group from "./components/Group";
import ProfilSalariPopup from "./screens/ProfilSalariPopup";
import Personnel from "./screens/Personnel";
import Setting from "./screens/Setting";
import LoadingScreen from "./screens/LoadingScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import AccidentMaladie from "./screens/AccidentMaladie"
import RuptureConventionnel from "./screens/RuptureConventionnel";
import ProfilSalariUpdateVariable from "./screens/ProfilSalariUpdateVariable";
import AssignementVariablesDePaie from "./screens/AssignementVariablesDePaie";
import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
            screenOptions={{ headerShown: false  }}
            initialRouteName="Loading"
          >
          <Stack.Screen
            name="Notification1"
            component={Notification1}
            options={{ headerShown: false }}
          />
    <Stack.Screen name="Loading" component={LoadingScreen }  />
    
    <Stack.Screen
    name="SignUp"
    component={SignUp}
    options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Signup1"
                component={Signup1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SuccessScreen"
                component={SuccessScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeIZIP"
                component={HomeIZIP}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AjouterUnEmploy"
                component={AjouterUnEmploy}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AjouterUnEmploy1"
                component={AjouterUnEmploy1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AjouterUnEmploy2"
                component={AjouterUnEmploy2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AjouterUnEmploy3"
                component={AjouterUnEmploy3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GestionDeVariablesDePaies"
                component={GestionDeVariablesDePaies}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfilSalariPopup"
                component={ProfilSalariPopup}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Personnel"
                component={Personnel}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Setting"
                component={Setting}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AccidentMaladie"
                component={AccidentMaladie}
                options={{ headerShown: false }}
              />
              <Stack.Screen
              name="RuptureConventionnel"
              component={RuptureConventionnel}
              options={{ headerShown: false }}
            />
            <Stack.Screen
            name="ProfilSalariUpdateVariable"
            component={ProfilSalariUpdateVariable}
            options={{ headerShown: false }}
          />
          <Stack.Screen
              name="AssignementVariablesDePaie"
              component={AssignementVariablesDePaie}
              options={{ headerShown: false }}
            />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
};
export default App;
