
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Signup from './screens/SignUp';
import { SQLiteProvider } from 'expo-sqlite';
import { initializeUsuarioTable } from './service/userService';
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactPage';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <SQLiteProvider 
    databaseName="user_db" 
    onInit={initializeUsuarioTable}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="AboutUs" component={AboutUs} />
          <Stack.Screen name="ContactUs" component={ContactUs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SQLiteProvider>
  );
}

export default App;