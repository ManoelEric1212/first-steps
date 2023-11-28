import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerList: {
    width: "100%",
    backgroundColor: "#1F1E25",
    borderradius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.06)",
    borderRadius: 10,
  },
  actionButtons: {
    flexDirection: "row",
  },
  nameList: {
    flex: 1,
    fontSize: 16,
    color: "#FFF",
    marginLeft: 16,
  },
  nameListCheck: {
    flex: 1,
    fontSize: 16,
    color: "#FFF",
    marginLeft: 16,
    textDecorationLine: "line-through",
  },
  buttonTextList: {
    color: "#FFF",
    fontSize: 24,
  },
  buttonList: {
    width: 36,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
});
