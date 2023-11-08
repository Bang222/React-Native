import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddScreen from "./screens/AddScreen";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Database from "./database/Database";
import {useEffect} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import RouteHome from "./routes/RouteHome";

const RouteTab = createBottomTabNavigator();
const RouteStack = createStackNavigator();

const Add = "Add";
const Home = "Home";
const Search = "Search";

export default function App() {
    useEffect(() => {
        Database.initDatabase();
    }, []);
  return (
      <NavigationContainer>
        <RouteTab.Navigator
            initialRouteName={Add}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey',
                tabBarLabelStyle:[{
                    paddingBottom: 10,
                    fontSize:10,
                }],
                tabBarStyle: [
                    {
                        display: "flex",
                        height:70,
                        padding:10,

                    },
                    null
                ],
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let nameRoute = route.name;

                if (nameRoute === Add) {
                  iconName = focused ? 'add' : 'add-outline';

                } else if (nameRoute === Home) {
                  iconName = focused ? 'home' : 'home-outline';

                } else if (nameRoute === Search) {
                  iconName = focused ? 'search' : 'search-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
        >
          <RouteTab.Screen name={Add} options={{
              headerShown: false,
          }} component={AddScreen} />
          <RouteTab.Screen
              options={{
                  headerShown: false,
              }}
              name={Home} component={RouteHome} />
          <RouteTab.Screen
              options={{
                  headerShown: false,
              }}
              name={Search} component={SearchScreen} />
        </RouteTab.Navigator>
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    headerStyleCustom: {
        backgroundColor:"blue",
    },
    headerTitleStyleCustom: {
        flex: 1,
        justifyContent:"center",
        color: "white",
        fontSize: 30,
    },
    container: {
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 12,
    },
});
