// import 'react-native-gesture-handler';
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Nunito_400Regular,
  Lato_400Regular,
  Inter_900Black,
  DancingScript_400Regular,
} from "@expo-google-fonts/dev";
import { LoginDB, LoginStorage } from "./src/pages";
import HomeDrawer from './src/pages/HomeDrawer'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito: Nunito_400Regular,
    Lato: Lato_400Regular,
    Inter: Inter_900Black,
    Dancing: DancingScript_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider style={styles.container}>
      <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="LoginStorage" component={LoginStorage}/>
          <Stack.Screen name="LoginSQLite" component={LoginDB}/>
          <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});
