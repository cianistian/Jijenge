import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 1,
    paddingBottom: 30,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1a73e8",
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
  },
  servicesContainer: {
    marginTop: 20,
  },
  servicesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  servicesList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#007AFF",
    padding: 5,
    borderRadius: 5,
    width: "100%",
    marginTop: 1,
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
    color: "blue",
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
  iconContainer: {
    alignItems: "center",
    marginLeft: 3,
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
    bottom: 20,
    right: 20,
  },
});

export const serviceCardStyles = StyleSheet.create({
  serviceCard: {
    backgroundColor: "#fff",
    width: "30%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  serviceCardTitle: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
});
