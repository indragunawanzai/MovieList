import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Home/HomeScreen';
import DetailMovie from '../../screens/Detail/DetailMovie';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="DetailMovie"
                component={DetailMovie}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>

    )
}

export default AppStack 