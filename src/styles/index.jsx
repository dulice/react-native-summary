import { StyleSheet } from "react-native";
import { SIZE } from "./constant";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: SIZE.lg,
    textAlign: "center",
    fontFamily: "Nunito",
    marginBottom: SIZE.xs,
  },
  card: {
    padding: 12,
    borderRadius: 5,
    minHeight: 100,
    backgroundColor: "#fff",
    margin: SIZE.xs
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: SIZE.xs
  },
  bgImg: {
    flex: 1,
    justifyContent: "center",
    padding: SIZE.md,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1
  },
  button: {
    padding: SIZE.xs,
    marginBottom: SIZE.xs,
    shadowColor: "#000",
    backgroundColor: "#3677db",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // Android only,
  },
  centerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e2e2e2"
  },
  modalBox: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: SIZE.lg
  }
});
