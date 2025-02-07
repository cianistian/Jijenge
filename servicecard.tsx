import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Ensure you're using the correct icon library

type ServiceCardProps = {
  icon: React.ComponentProps<typeof MaterialIcons>["name"]; // Restrict icon to valid names
  title: string; // Title for the card
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title }) => {
  return (
    <View style={styles.card}>
      <MaterialIcons name={icon} size={30} color="#1a73e8" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  title: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default ServiceCard;
