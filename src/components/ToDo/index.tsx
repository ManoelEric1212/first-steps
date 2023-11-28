import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import { toDoPropsScreen } from "../../screens/Home";

export interface ToDoProps {
  toDo: toDoPropsScreen;
  onRemove: () => void;
  onEdit: () => void;
}
export function ToDo({ toDo, onRemove, onEdit }: ToDoProps) {
  return (
    <View style={styles.containerList}>
      <CheckBox checked={toDo.checked} onPress={onEdit} />
      <Text style={toDo.checked ? styles.nameListCheck : styles.nameList}>
        {toDo.toDo}
      </Text>
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.buttonList}>
          <Feather name="trash-2" size={25} color={"#333"} onPress={onRemove} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
