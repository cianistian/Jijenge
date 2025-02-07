import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Import components
import Home from "./Home";
import logsign from "./logsign";
import Rental from "./Rental";
import Electronics from "./Electronics";
// Define the stack param list type
type RootStackParamList = {
  Index: undefined;
  Home: undefined;
  logsign: undefined;
  Rental: undefined;
  Electronics: undefined;
};          

const Stack = createStackNavigator<RootStackParamList>();

// IndexScreen component
const IndexScreen = ({ navigation }: { navigation: any }) => {
  const [message, setMessage] = useState("Welcome to Jijenge App!");
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.title}>Karibu Jijenge!</Text>
      <Text style={styles.subtitle}>{message}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")} // Navigate to the Home screen
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

// Main Index component
export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined} initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={IndexScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="logsign"
          component={logsign}
          options={{ title: "Login/Signup" }}
        />
         <Stack.Screen
          name="Rental"
          component={Rental}
          options={{ title: "Rentals" }}
        />
        <Stack.Screen
          name="Electronics"
          component={Electronics}
          options={{ title: "Electronics" }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1a73e8",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: "center",
    color: "#555",
  },
  button: {
    backgroundColor: "#1a73e8",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
