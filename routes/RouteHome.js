import HomeScreen from "../screens/HomeScreen";
import EditHike from "../screens/EditHike";
import {createStackNavigator} from "@react-navigation/stack";
import ObservationScreen from "../screens/ObservationScreen";
import AddObservationScreen from "../screens/AddObservationScreen";

const RouteStack = createStackNavigator();
export default function RouteHome() {
    return <RouteStack.Navigator initialRouteName="HomeScreen">
        <RouteStack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
                headerShown: false,
            }}
        />
        <RouteStack.Screen
            name="EditHike"
            component={EditHike}
            options={{
                headerShown: false,
                headerTitle: "",
            }}
        />
        {/*<RouteStack.Screen*/}
        {/*    name="RouteObservation"*/}
        {/*    component={RouteObservation}*/}
        {/*    options={{*/}
        {/*        headerShown: false,*/}
        {/*        headerTitle: "",*/}
        {/*    }}*/}
        {/*/>*/}
        <RouteStack.Screen
            name="ObservationScreen"
            component={ObservationScreen}
            options={{
                headerShown: false,
            }}
        />
        <RouteStack.Screen
            name="AddObservationScreen"
            component={AddObservationScreen}
            options={{
                headerShown: false,
                headerTitle: "",
            }}
        />
    </RouteStack.Navigator>
}