import 'react-native-gesture-handler'
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import Screen2 from "./screens/Screen2";
import MyAppBar from "./components/MyAppBar";

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                header: (props) => <MyAppBar {...props} />,
            }}>
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Screen2" component={Screen2}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
