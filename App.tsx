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
              <Feather name="list" color={"#333"} size={size} />
            ),
            tabBarLabel: "ToDo",
            tabBarLabelStyle: {
              color: "#333",
            },
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
