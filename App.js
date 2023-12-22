import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './Pages/About/About/About';
import Approved from './Pages/Approved/Approved';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

// Assuming that Header and Footer are components that you want to display on each screen
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
        <Stack.Screen name="Approved" component={Approved} options={{ headerShown: false }} />
        <Stack.Screen name="NotFound" component={NotFound} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;