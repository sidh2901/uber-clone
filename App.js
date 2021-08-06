import React from 'react';
import { KeyboardAvoidingView,StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './store';
import MapScreen from './screens/MapScreen';
import { Platform } from 'react-native';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store} >
      <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView 
        behavior={Platform.OS ==="ios" ? "padding" : "height"}
        style={{flex:1}}
        keyboardVerticalOffset={Platform.OS ==="ios" ?-64: 0}
        >
        <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
         />
         <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerShown: false,
          }}
         />
        </Stack.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
      </NavigationContainer> 
    </Provider>
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
