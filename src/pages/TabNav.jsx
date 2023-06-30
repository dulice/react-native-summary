import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FetchData, Flat, Map, Section } from "../components";
import { COLOR } from "../styles/constant";

const Tab = createMaterialTopTabNavigator();
const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarPressColor: COLOR.warning,
        tabBarIndicatorStyle: { backgroundColor: COLOR.warning },
        tabBarActiveTintColor: COLOR.warning
      }}
    >
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Flat" component={Flat} />
      <Tab.Screen name="Section" component={Section} />
      <Tab.Screen name="Fetch" component={FetchData} />
    </Tab.Navigator>
  );
};

export default TabNav;
