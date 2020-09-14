import React from "react";
import { Text, TouchableHighlight } from "react-native";
import { styles } from "../util/Styles";
interface IProps {
  face: string;
  onTap: (face: string) => void;
}
export const CalButton: React.FC<IProps> = (props: IProps) => {
  return (
    <TouchableHighlight
      style={styles.inputButton}
      underlayColor="#193441"
      onPress={() => props.onTap(props.face)}
    >
      <Text style={styles.inputButtonText}>{props.face}</Text>
    </TouchableHighlight>
  );
};
