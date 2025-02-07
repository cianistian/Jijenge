import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from "react-native";
import { CheckBox } from 'react-native-elements';

const ElectronicsPage = () => {
  const products = [
    { id: 1, title: "Laptop", price: "$999.99", imageUrl: require('./pictures/laptop.jpg') },
    { id: 2, title: "Phone", price: "$599.99", imageUrl: require('./pictures/phone.jpg') },
    { id: 3, title: "Headphones", price: "$199.99", imageUrl: require('./pictures/headphones.jpg') },
    { id: 4, title: "Camera", price: "$499.99", imageUrl: require('./pictures/camera.jpg') },
    { id: 5, title: "Smartwatch", price: "$299.99", imageUrl: require('./pictures/smartwatch.jpg') },
    { id: 6, title: "Tablet", price: "$399.99", imageUrl: require('./pictures/tablet.jpg') },
  ];
 

  const renderProductItem = ({ item }: { item: { id: number; title: string; price: string; imageUrl: any } }) => (
    <View style={styles.card}>
      <Image source={item.imageUrl} style={styles.productImage} />
      <View style={styles.cardContent}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Left Panel for Filtering */}
      <View style={styles.leftPanel}>
        <Text style={styles.h2}>Filters</Text>
        <ScrollView>
          <View style={styles.filterGroup}>
            <Text style={styles.h3}>Category</Text>
            <CheckBox checked={false} />
            <Text>Laptops</Text>
            <CheckBox checked={false} />
            <Text>Phones</Text>
            <CheckBox checked={false} />
            <Text>Accessories</Text>
          </View>
          <View style={styles.filterGroup}>
            <Text style={styles.h3}>Price Range</Text>
            <Text>$0 - $1000</Text>
          </View>
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.buttonText}>Apply Filters</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Main Content: Photo Library */}
      <View style={styles.rightPanel}>
        <Text style={styles.h1}>Electronics</Text>
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.gridContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "100%",
  },

  leftPanel: {
    width: "25%",
    backgroundColor: "#f8f9fa",
    padding: 10,
  },
  rightPanel: {
    width: "75%",
    padding: 10,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  h3: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  filterGroup: {
    marginBottom: 10,
  },
  applyButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  gridContainer: {
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 10,
    width: "48%",
    marginRight: "2%",
    marginLeft: "2%",
  },
  cardContent: {
    padding: 10,
  },
  productImage: {
    width: "75%",
    resizeMode: 'contain',
    height: 100,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    marginBottom: 5,
  },
  buyButton: {
    backgroundColor: "#34C759",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
});

export default ElectronicsPage;

