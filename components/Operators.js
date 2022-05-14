import { View, Text, StyleSheet } from "react-native";
import React from "react";

//oprators components starts here

const Operators = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.operatorName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 90,

    height: 55,
    borderRadius: 10,
    backgroundColor: "#72727F",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 50,
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
});

export default Operators;
