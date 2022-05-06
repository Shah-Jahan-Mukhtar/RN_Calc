import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";

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

const opera = [
  {
    clear: "C",
    mode: "%",
    division: "/",
    multiply: "*",
    minus: "-",
    plus: "+",
  },
];

export default function App() {
  return (
    <View>
      <TextInput />
      <View style={{ backgroundColor: "#000000" }}>
        <View style={styles.operatorView}>
          {opera.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <Operators operatorName={item.clear} />
              </TouchableOpacity>
            );
          })}
          {opera.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <Operators operatorName={item.mode} />
              </TouchableOpacity>
            );
          })}
          {opera.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <Operators operatorName={item.division} />
              </TouchableOpacity>
            );
          })}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginHorizontal: 15,
          }}
        >
          <View>
            <View style={styles.numbersView}>
              {num.map((item, index) => {
                return (
                  <TouchableOpacity>
                    <Numbers number={item.seven} key={index} />
                  </TouchableOpacity>
                );
              })}
              {num.map((item, index) => {
                return (
                  <TouchableOpacity>
                    <Numbers number={item.eight} key={index} />
                  </TouchableOpacity>
                );
              })}
              {num.map((item, index) => {
                return <Numbers number={item.nine} key={index} />;
              })}
            </View>
            <View style={styles.numbersView}>
              {num.map((item, index) => {
                return (
                  <TouchableOpacity>
                    <Numbers number={item.four} key={index} />
                  </TouchableOpacity>
                );
              })}
              {num.map((item, index) => {
                return (
                  <TouchableOpacity>
                    <Numbers number={item.five} key={index} />
                  </TouchableOpacity>
                );
              })}
              {num.map((item, index) => {
                return (
                  <TouchableOpacity>
                    <Numbers number={item.six} key={index} />
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={styles.numbersView}>
              {num.map((item, index) => {
                return (
                  <TouchableOpacity>
                    <Numbers number={item.one} key={index} />
                  </TouchableOpacity>
                );
              })}
              {num.map((item, index) => {
                return (
                  <TouchableOpacity>
                    <Numbers number={item.two} key={index} />
                  </TouchableOpacity>
                );
              })}
              {num.map((item, index) => {
                return (
                  <TouchableOpacity>
                    <Numbers number={item.three} key={index} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View style={{ justifyContent: "space-between", marginTop: 20 }}>
            {opera.map((item, index) => {
              return (
                <TouchableOpacity>
                  <Operators operatorName={item.multiply} key={index} />
                </TouchableOpacity>
              );
            })}
            {opera.map((item, index) => {
              return (
                <TouchableOpacity>
                  <Operators operatorName={item.minus} key={index} />
                </TouchableOpacity>
              );
            })}
            {opera.map((item, index) => {
              return (
                <TouchableOpacity>
                  <Operators operatorName={item.plus} key={index} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <View
              style={{
                width: 130,
                height: 62,
                backgroundColor: "#3D3D3D",
                borderRadius: 40,
                marginLeft: "10%",
                marginTop: 20,
                justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#FFF",

                  fontSize: 25,
                  marginLeft: "20%",
                }}
              >
                0
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                width: 75,
                height: 62,
                backgroundColor: "#3D3D3D",
                borderRadius: 40,
                marginLeft: "5%",
                marginTop: 20,
                justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#FFF",

                  fontSize: 35,
                  marginLeft: "40%",
                  fontWeight: "bold",
                }}
              >
                ,
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                width: 65,
                height: 65,
                backgroundColor: "#3D3D3D",
                borderRadius: 50,
                marginLeft: "8%",
                marginTop: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#FFF",

                  fontSize: 35,
                }}
              >
                =
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    marginHorizontal: 15,
  },
  operatorView: {
    flexDirection: "row",

    justifyContent: "space-evenly",
    marginTop: 30,
  },
  numbersView: {
    flexDirection: "row",
    width: "78%",
    justifyContent: "space-evenly",
    marginTop: 20,

    // backgroundColor: "#fff",
  },

  BlackView: {
    marginBottom: 10,
  },
});
