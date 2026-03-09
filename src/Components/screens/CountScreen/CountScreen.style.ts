import { StyleSheet } from "react-native";
import { colors } from "../../../Themes/colors";
import { space } from "../../../Themes";

export const stylesCountScreen = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
  labelText: {
    color: colors.background,
    fontStyle: "italic",
    fontSize: space.lg
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: space.xl,
    padding: 5
    
  }
});