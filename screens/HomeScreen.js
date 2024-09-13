import {Text} from "react-native-paper";
import {StyleSheet, View} from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <>
            <View style={style.container}>
                <Text>HomeScreen</Text>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen