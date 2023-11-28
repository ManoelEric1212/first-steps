# Minicurso React Native
## Criação da estrutura de pastas

## Componentização de elementos utilizando props



## Tab Navigator

<a>https://reactnavigation.org/docs/bottom-tab-navigator</a>


import Home from "./src/screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import About from "./src/screens/About";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="list"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="list" color={color} size={size} />
            ),
            tabBarLabel: "ToDo",
          }}
        />
        <Tab.Screen
          name="about"
          component={About}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="info" color={color} size={size} />
            ),
            tabBarLabel: "About",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

## Versão com Tab e lista de toDo
- Index

```js

import { StatusBar } from "expo-status-bar";
import {
  Button,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>ToDo List</Text>
      <Text style={styles.eventDate}>{`${new Date()}`}</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            <Feather name="plus-circle" size={22} color={"#fff"} />
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerList}>
          <Text style={styles.nameList}>Testando</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.buttonList}>
              <Feather name="edit" size={25} color={"#333"} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonList}>
              <Feather name="trash-2" size={25} color={"#333"} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

```

- Style

```js

import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    gap: 14,
    marginTop: 36,
    marginBottom: 42,
  },
  listEmpty: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
  },
  containerList: {
    width: "100%",
    backgroundColor: "#1F1E25",
    borderradius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.06)",
    borderRadius: 10,
  },
  actionButtons: {
    flexDirection: "row",
  },
  nameList: {
    flex: 1,
    fontSize: 16,
    color: "#FFF",
    marginLeft: 16,
  },
  buttonTextList: {
    color: "#FFF",
    fontSize: 24,
  },
  buttonList: {
    width: 36,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
});



```


## Componentizando o List Element

```js

import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";

export interface ToDoProps {
  toDo: string;
}
export function ToDo({ toDo }: ToDoProps) {
  return (
    <View style={styles.containerList}>
      <Text style={styles.nameList}>{toDo}</Text>
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.buttonList}>
          <Feather name="edit" size={25} color={"#333"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonList}>
          <Feather name="trash-2" size={25} color={"#333"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}


```

## Utilizando uma flat List

```js
      <FlatList
        data={mockup}
        keyExtractor={(item, obj) => `ListFlatNumber${obj}`}
        renderItem={({ item }) => <ToDo toDo={item.toDo} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>Nada a renderizar</Text>
        )}
      />
```

## Utilizando estados para adicionar elementos

```js
  const [itemsToDo, setItemToDo] = useState<toDoPropsScreen[]>([]);
  const [toDoName, setToDoName] = useState("");

  function handleToDoAdd() {
    setItemToDo((prevState) => [...prevState, { toDo: toDoName }]);
    setToDoName("");
  }

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
        renderItem={({ item }) => <ToDo toDo={item.toDo} />}
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

```

### Melhorando função de inserção com validação

```js
  function handleToDoAdd() {
    if (itemsToDo.find((obj) => obj.toDo === toDoName)) {
      return Alert.alert(
        "Tarefa já existente",
        "Já existe uma tarefa com essa nomenclatura"
      );
    }
    setItemToDo((prevState) => [...prevState, { toDo: toDoName }]);
    setToDoName("");
  }

```

### Removendo elementos da lista

```js

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


<FlatList
        data={itemsToDo}
        keyExtractor={(item, obj) => `ListFlatNumber${obj}`}
        renderItem={({ item }) => (
          <ToDo
            toDo={item.toDo}
            onRemove={() => handleParcipantRemove(item.toDo)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>Nada a renderizar</Text>
        )}
      />

```

## Adicionando lógica de marcação de checkbox

```
npm install react-native-elements
```

```js
export interface toDoPropsScreen {
  toDo: string;
  checked: boolean;
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

<ToDo
            toDo={item}
            onEdit={() => handleParcipantEdit(item.toDo)}
            onRemove={() => handleParcipantRemove(item.toDo)}
          />

```

- COmponente ToDo

```js

export interface ToDoProps {
  toDo: toDoPropsScreen;
  onRemove: () => void;
  onEdit: () => void;
}
export function ToDo({ toDo, onRemove, onEdit }: ToDoProps) {
  return (
    <View style={styles.containerList}>
      <CheckBox checked={toDo.checked} onPress={onEdit} />
      <Text style={styles.nameList}>{toDo.toDo}</Text>
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.buttonList}>
          <Feather name="trash-2" size={25} color={"#333"} onPress={onRemove} />
        </TouchableOpacity>
      </View>
    </View>
  );
}


```

 textDecorationLine: "line-through",
