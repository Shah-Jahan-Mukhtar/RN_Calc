import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Numbers from "./components/Numbers";

const num = [
  {
    seven: 7,
    eight: 8,
    nine: 9,
    six: 6,
    five: 5,
    four: 4,
    three: 3,
    two: 2,
    one: 1,
  },
];

export default function App() {
  return (
    <View>
      <View style={styles.numbersView}>
        {num.map((item, index) => {
          return <Numbers number={item.seven} key={index} />;
        })}
        {num.map((item, index) => {
          return <Numbers number={item.eight} key={index} />;
        })}
        {num.map((item, index) => {
          return <Numbers number={item.nine} key={index} />;
        })}
      </View>
      <View style={styles.numbersView}>
        {num.map((item, index) => {
          return <Numbers number={item.four} key={index} />;
        })}
        {num.map((item, index) => {
          return <Numbers number={item.five} key={index} />;
        })}
        {num.map((item, index) => {
          return <Numbers number={item.six} key={index} />;
        })}
      </View>
      <View style={styles.numbersView}>
        {num.map((item, index) => {
          return <Numbers number={item.one} key={index} />;
        })}
        {num.map((item, index) => {
          return <Numbers number={item.two} key={index} />;
        })}
        {num.map((item, index) => {
          return <Numbers number={item.three} key={index} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

    marginHorizontal: 15,
  },
  numbersView: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
});
