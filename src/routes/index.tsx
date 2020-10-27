import React from 'react';
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import Pages from '../pages';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Titulo } from '../components/Texto'

const Stack = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Pages}
                options={{
                    headerRight: () => <Titulo>To-Do</Titulo>,
                    headerTitle: '',
                    headerLeft: ({ }) => (
                        <TouchableOpacity style={{ marginLeft: 15 }}>
                            <Feather
                                name="align-left"
                                size={32}
                                color="#3C8BEB" />
                        </TouchableOpacity>
                    ),
                    cardShadowEnabled: false,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0,
                    }
                }}
            />
        </Stack.Navigator>
    );
}

export default Routes;