import { StyleSheet } from "react-native";
import { colors } from "../../../Themes/colors";
import { space } from "../../../Themes";

export const stylesCountScreen = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  text: {
    fontSize: 12,
  },
  labelText: {
    color: colors.background,
    fontStyle: "italic",
    fontSize: space.lg
  },
  
  button: {
    width: 40,
    height: 40,
     borderRadius: space.xl,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  }
});