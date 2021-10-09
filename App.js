import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import {
  NavigationContainer,
  useRoute,
  useNavigation,
} from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import CoursesList from "./components/CoursesList";
import CourseDetails from "./components/CourseDetails";
import AddReview from "./components/AddReview";
import About from "./components/About";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Courses = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Courses-List"
      component={CoursesList}
      options={{
        headerTitle: "Courses Review",
      }}
    />
    <Stack.Screen name="Course-Details" component={CourseDetails} />
    <Stack.Screen name="Add-Review" component={AddReview} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Courses"
          component={Courses}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons size={26} name="account" color={color} />
            ),
          }}
        />
      </Tab.Navigator>
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
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
