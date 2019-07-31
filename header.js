import React from "react";
import { Text } from "react-native";

const Header = () => {
  const { textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Gay Fighters</Text>;
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#000",
    shadowWidth: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    paddingTop: 15
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
