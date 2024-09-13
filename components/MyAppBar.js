import {Appbar, Menu} from 'react-native-paper';
import {getHeaderTitle} from '@react-navigation/elements'
import React from 'react';

export default function MyAppBar({navigation, route, options, back}) {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const title = getHeaderTitle(options, route.name);

    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title="My MD Nav Demo" />
            {!back ? (
                <Appbar.Action
                    title={"next screen"}
                    onPress={() => navigation.navigate("Screen2")}
                    icon={"arrow-right"}
                />)
                    : null }
        </Appbar.Header>
    );
}