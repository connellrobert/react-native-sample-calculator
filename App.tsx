import React, { useState } from "react";
import { Text, View } from "react-native";
import { Layout } from "./app/components/Layout";
import { styles } from "./app/util/Styles";

export default () => {
  const [inputValue, setInputValue] = useState("");
  const [prevValue, setPrevValue] = useState("");

  const _evaluate = (s: string): string => {
    let result = "";
    try {
      // eslint-disable-next-line no-eval
      result = eval(s);
      return result;
    } catch (err) {
      return "Invalid Input";
    }
  };
  const _onInputButtonPressed = (input: string) => {
    if (prevValue === "=") {
      setInputValue(input);
      setPrevValue(input);
      return;
    }
    setPrevValue(input);
    if (input === "=") {
      setInputValue(_evaluate(inputValue));
    } else {
      setInputValue(inputValue + input);
    }
  };
  return (
    <View style={styles.rootContainer}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{inputValue}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Layout tapHandler={_onInputButtonPressed} />
      </View>
    </View>
  );
};
