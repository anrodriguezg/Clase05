import { StyleSheet } from "react-native";
import { colors, space } from "./Themes";

export const appStyles = StyleSheet.create({
 
  safeArea: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.background
  },
  container: {
    height: 70
  },
  container2: {
    height: 50
  },
  textTitle: {
    fontSize: space.xl
  }

});