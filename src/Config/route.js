import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './../Screens/login';

const Stack = createStackNavigator();

export function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Login" 
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

