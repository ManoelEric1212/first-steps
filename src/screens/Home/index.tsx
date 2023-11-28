import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { ToDo } from "../../components/ToDo";
import { useState } from "react";

export interface toDoPropsScreen {
  toDo: string;
  checked: boolean;
}

export default function Home({ navigation }: any) {
  const [itemsToDo, setItemToDo] = useState<toDoPropsScreen[]>([]);
  const [toDoName, setToDoName] = useState("");

  function handleToDoAdd() {
    if (itemsToDo.find((obj) => obj.toDo === toDoName)) {
      return Alert.alert(
        "Tarefa já existente",
        "Já existe uma tarefa com essa nomenclatura"
      );
    }
    setItemToDo((prevState) => [
      ...prevState,
      { toDo: toDoName, checked: false },
    ]);
    setToDoName("");
  }
  function handleParcipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o(a) participante(a) ${name} ?`, [
      {
        text: "Sim",
        onPress: () =>
          setItemToDo((prevState) =>
            prevState.filter((obj) => obj.toDo !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }
  function handleParcipantEdit(name: string) {
    setTrueCheckbox(itemsToDo, name);
  }
  const setTrueCheckbox = (data: toDoPropsScreen[], name: string) => {
    const newVector = data.map((obj) =>
      obj.toDo === name ? { ...obj, checked: !obj.checked } : obj
    );
    setItemToDo(newVector);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>ToDo List</Text>
      <Text style={styles.eventDate}>{`${new Date()}`}</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          onChangeText={setToDoName}
          value={toDoName}
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleToDoAdd}>
          <Text style={styles.buttonText}>
            <Feather name="plus-circle" size={22} color={"#fff"} />
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={itemsToDo}
        keyExtractor={(item, obj) => `ListFlatNumber${obj}`}
        renderItem={({ item }) => (
          <ToDo
            toDo={item}
            onEdit={() => handleParcipantEdit(item.toDo)}
            onRemove={() => handleParcipantRemove(item.toDo)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>Nada a renderizar</Text>
        )}
      />
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {mockup.map((item, i) => (
          <ToDo toDo={item.toDo} key={`ToDoComponent${i}`} />
        ))}
      </ScrollView> */}
      <StatusBar style="auto" />
    </View>
  );
}
