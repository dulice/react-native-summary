import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Btn, Input } from "../components";
import Icon from "react-native-vector-icons/Ionicons";
import { COLOR, SIZE } from "../styles/constant";

const Tab = createBottomTabNavigator();

const TabBottom = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLOR.warning,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: COLOR.primary,
        }}
      >
        <Tab.Screen
          name="Input"
          component={Input}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="home"
                size={focused ? SIZE.lg : SIZE.md}
                color={focused ? COLOR.warning : COLOR.dark}
              />
            ),
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="Btn"
          component={Btn}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="keypad"
                size={focused ? SIZE.lg : SIZE.md}
                color={focused ? COLOR.warning : COLOR.dark}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabBottom;
