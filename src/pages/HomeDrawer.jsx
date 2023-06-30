import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, TabBottom, TabNav } from ".";
import { Location, Logout } from "../components";
import Icon from "react-native-vector-icons/Ionicons";
import { COLOR, SIZE } from "../styles/constant";

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          drawerActiveTintColor: COLOR.warning,
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ focused }) => (
              <Icon
                name="home"
                size={focused ? SIZE.lg : SIZE.md}
                color={focused ? COLOR.warning : COLOR.dark}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Location"
          component={Location}
          options={{
            drawerIcon: ({ focused }) => (
              <Icon
                name="location"
                size={focused ? SIZE.lg : SIZE.md}
                color={focused ? COLOR.warning : COLOR.dark}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="TabBottom"
          component={TabBottom}
          options={{
            drawerIcon: ({ focused }) => (
              <Icon
                name="keypad"
                size={focused ? SIZE.lg : SIZE.md}
                color={focused ? COLOR.warning : COLOR.dark}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="TabNav"
          component={TabNav}
          options={{
            drawerIcon: ({ focused }) => (
              <Icon
                name="logo-ionic"
                size={focused ? SIZE.lg : SIZE.md}
                color={focused ? COLOR.warning : COLOR.dark}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Logout"
          component={Logout}
          options={{
            drawerIcon: ({ focused }) => (
              <Icon
                name="power"
                size={focused ? SIZE.lg : SIZE.md}
                color={focused ? COLOR.warning : COLOR.dark}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default HomeDrawer;
