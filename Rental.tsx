import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
const Rental = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Properties</Text>

      {/* Properties Table */}
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Rental</Text>
          <Text style={styles.tableHeader}>Land</Text>
          <Text style={styles.tableHeader}>Lease</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Single</Text>
          <Text style={styles.tableCell}>¼</Text>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Bedsitter</Text>
          <Text style={styles.tableCell}>½</Text>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>One Bedroom</Text>
          <Text style={styles.tableCell}>1/3</Text>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Two Bedrooms</Text>
          <Text style={styles.tableCell}>Acre</Text>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Three Bedrooms</Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Mansion</Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Self Contain</Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
        </View>
      </View>

      {/* Recommendations Section */}
      <Text style={styles.recommendationTitle}>Daily Picks</Text>
      <View style={styles.recommendationContainer}>
        <TouchableOpacity style={styles.recommendationCard}>
          <Image source={require('./pictures/house1.jpg')} style={styles.recommendationImage} />
          <Text style={styles.recommendationText}>MANSION ON SALE</Text>
          <Text style={styles.recommendationDescription}>Beautiful 3 bedroom house in a quiet neighborhood</Text>
          <Text style={styles.recommendationPrice}>$1,200/month</Text>
          <TouchableOpacity style={styles.enquireButton}>
            <Text style={styles.enquireButtonText}>Enquire</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recommendationCard}>
          <Image source={require('./pictures/house2.jpg')} style={styles.recommendationImage} />
          <Text style={styles.recommendationText}>HARDWARE AND CONSTRUCTION</Text>
          <Text style={styles.recommendationDescription}>Hardware materials for construction available</Text>
          <Text style={styles.recommendationPrice}>PRICE:Enquire</Text>
          <TouchableOpacity style={styles.enquireButton}>
            <Text style={styles.enquireButtonText}>Enquire</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recommendationCard}>
          <Image source={require('./pictures/land.jpg')} style={styles.recommendationImage} />
          <Text style={styles.recommendationText}>1 ACRE LAND FOR SALE</Text>
          <Text style={styles.recommendationDescription}>LOCATION:Kiserian</Text>
          <Text style={styles.recommendationPrice}>1.23M</Text>
          <TouchableOpacity style={styles.enquireButton}>
            <Text style={styles.enquireButtonText}>Enquire</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Table styles (unchanged)
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  table: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    overflow: "hidden",
    flex: 1,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flex: 1,
  },
  tableHeader: {
    flex: 1,
    padding: 10,
    backgroundColor: "#007AFF",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: "center",
  },

  // Recommendation styles
  recommendationContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    flex: 1,
    alignItems: "flex-start", // Left-align the text and button horizontally
  },
  recommendationText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "left",
  },
  recommendationCard: {
    flexDirection: "column", // Arrange image, text and button vertically
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: "100%",
    marginBottom: 20,
  },
  recommendationImage: {
    width: 250, // Set larger fixed width for the image
    height: 180, // Set larger fixed height for the image
    borderRadius: 7,
    resizeMode: "cover",
    marginBottom: 5, // Space between image and text
    backgroundColor: "#ccc", // Placeholder color
  },
  recommendationContent: {
    flex: 1, // Allow the text container to take up remaining space
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign:"left",
    marginBottom: 10,
  },
  recommendationDescription: {
    fontSize: 14,
    color: "#666",
    textAlign:"left",
    marginBottom: 10,
  },
  recommendationPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign:"left",
    marginBottom: 20,
  },
  enquireButton: {
    backgroundColor: "grey",
    padding: 5,
    borderRadius: 25,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  enquireButtonText: {
    fontSize: 16,
    color: "#fff",
  },
});

/******  e4cf37c0-8807-4e2d-9fba-aba24d012db6  *******/
/******  c318b2a7-18f6-4488-abdf-cb94c179ed47  *******/
export default Rental;