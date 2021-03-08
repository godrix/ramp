import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SigIn from '@screens/SigIn';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SigIn"
      component={SigIn}
      options={{ headerShown: false }}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
