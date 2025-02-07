import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView, TextInput, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ServiceCard from "./servicecard";
import { homeStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";  const Home = () => {
  const navigation = useNavigation<any>(); 
  const [showModal, setShowModal] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  return (
    <ScrollView contentContainerStyle={homeStyles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Ionicons name="home-outline" size={24} color="white" />
            <Text style={styles.iconLabel}>Home</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity onPress={() => console.log('Search:', searchQuery)}>
            <Ionicons name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <View style={styles.iconContainer}>
            <Ionicons name="list-circle-outline" size={24} color="white" />
            <Text style={styles.iconLabel}>Services</Text>
          </View>
        </TouchableOpacity>
        {/* Login/Signup Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("logsign")}  // Navigate using the hook
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Services Modal */}
      <Modal
        visible={showModal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Rental Agency</Text>
            <Text style={styles.modalText}>Electronics</Text>
            <Text style={styles.modalText}>Moving & Packaging</Text>
            <Text style={styles.modalText}>Hardware/construction </Text>
            <Text style={styles.modalText}>Skill Hub</Text>
            <Text style={styles.modalText}>Pata Kazi</Text>
            <Text style={styles.modalText}>Tours</Text>
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Services Section */}
      <View style={styles.servicesContainer}>
        <Text style={styles.servicesTitle}>Our Services</Text>
        <View style={styles.servicesList}>
          <View style={styles.serviceCard}>
            <TouchableOpacity onPress={() => navigation.navigate('Rental')}>
              <ServiceCard icon="home" title="Rentals" />
            </TouchableOpacity>
          </View>
          <View style={styles.serviceCard}>
            <TouchableOpacity onPress={() => navigation.navigate('Electronics')}>
              <ServiceCard icon="tv" title="Electronics" />
            </TouchableOpacity>
          </View>
          <View style={styles.serviceCard}>
            <TouchableOpacity onPress={() => navigation.navigate('MovingAndPackaging')}>
              <ServiceCard icon="local-shipping" title="Moving" />
            </TouchableOpacity>
          </View>
          <View style={styles.serviceCard}>
            <TouchableOpacity onPress={() => navigation.navigate('Tours')}>
              <ServiceCard icon="map" title="Tours" />
            </TouchableOpacity>
          </View>
          <View style={styles.serviceCard}>
            <TouchableOpacity onPress={() => navigation.navigate('Careers')}>
              <ServiceCard icon="work" title="Careers" />
            </TouchableOpacity>
          </View>
          <View style={styles.serviceCard}>
            <TouchableOpacity onPress={() => navigation.navigate('Construction')}>
              <ServiceCard icon="build" title="Construction" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Floating WhatsApp Icon and Call Button */}

      
      <TouchableOpacity
        style={styles.whatsappButton}
        onPress={() => {
          const url = "whatsapp://send?phone=+1234567890"; // Replace with your company's WhatsApp number
          Linking.canOpenURL(url).then(supported => {
            if (supported) {
              Linking.openURL(url);
            } else {
              console.log("WhatsApp is not installed");
            }
          });
        }}
      >
        <Ionicons name="logo-whatsapp" size={50} color="green" />
      </TouchableOpacity>
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  servicesContainer: {
    marginTop: 20,
  },
  servicesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  servicesList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  serviceCard: {
    width: "33.33%",
    marginBottom: 15,
  },
  icon: {
    fontSize: 14, // Reduced icon size
  },
  serviceCardTitle: {
    fontSize: 14, // Reduced text size
  },
  navBar: {
  flexDirection: "row",
    justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#007AFF",
  padding: 5,
  borderRadius: 5,
  marginHorizontal: 0,
   
   
    width: "100%",
    marginTop:1,
   
   
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    width: "40%",
  },
  searchInput: {
    color: "Blue",
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
  
  iconContainer: {
    alignItems: "center",
    marginLeft:3,
  },
  iconLabel: {
    color: "white",
    fontSize: 9,
  },
  loginButton: {
    backgroundColor: "#007bff",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    color: "#007bff",
    marginTop: 10,
    fontSize: 16,
  },
  whatsappButton: {
    position: "absolute",
    bottom: 70,
    right: 20,
  },
});
export default Home;
