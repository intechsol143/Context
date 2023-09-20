// App.js

import React from 'react';
import { AppProvider } from './ContextApi'; // Import the AppProvider
import SignuP from './Signupscreen'; // Import your app components
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from './Homescreen';

const App = () => {

  const Stack = createNativeStackNavigator();
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignUp">
          <Stack.Screen name="SignuP" component={SignuP} />
          <Stack.Screen name="Home" component={Homescreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
