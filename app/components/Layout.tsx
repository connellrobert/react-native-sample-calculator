import React from "react";
import { View } from "react-native";
import { CalButton } from "./CalButton";
import { styles } from "../util/Styles";

interface IProps {
  tapHandler: (n: string) => void;
}
export const Layout: React.FC<IProps> = (props: IProps) => {
  const buttons = [
    ["1", "2", "3", "/"],
    ["4", "5", "6", "*"],
    ["7", "8", "9", "-"],
    ["0", ".", "=", "+"],
  ];

  const _renderRow = () => {
    let views = [];

    for (const row of buttons) {
      let buttonRow = [];
      for (const item of row) {
        buttonRow.push(
          <CalButton
            face={item}
            onTap={props.tapHandler}
            key={item + "_button"}
          />
        );
      }
      views.push(
        <View style={styles.inputRow} key={"row_" + row}>
          {buttonRow}
        </View>
      );
    }
    return views;
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.displayContainer} />
      <View style={styles.inputContainer}>{_renderRow()}</View>
    </View>
  );
};
