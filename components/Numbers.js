import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Numbers = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 65,
    height: 65,
    backgroundColor: "#38383F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginLeft: 40,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
  },
});

export default Numbers;
