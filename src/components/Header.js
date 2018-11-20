import React from "react";
import { View, Text } from "react-native";

const Header = props => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    /** BORDER */
    // borderColor: "green",
    // borderWidth: 1,
    // borderStyle: "solid",
    height: 60,
    paddingTop: 15,
    backgroundColor: "#F8F8F8",
    /** SHADOW now supported in RN ANDROID. 
        Use elevation instead */
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    elevation: 8,
    position: "relative",
    /** DISPLAY FLEXBOX */
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
