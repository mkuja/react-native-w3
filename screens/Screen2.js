import MyAppBar from "../components/MyAppBar";
import {StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";

const Screen2 = ({navigation}) => {
    return (
        <View style={style.container}>
            <Text>SecondScreen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Screen2