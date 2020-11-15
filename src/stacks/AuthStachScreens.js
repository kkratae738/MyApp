import React from 'react'
import { createStackNavigator } from '@react-natigation/stack';
import SignInScreene from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

export default AppStackScreens = () => {
   const AuthStack = creacteStackNavigator ();

   return (
       <AppStack.Navigator headerMode="node">
           <AppStack.Screen name="Signin" conpornent={SignInScreene}/>
           <AppStack.Screen name="Signup" conpornent={SignUpScreen}/>
       </AppStack.Navigator>
   )
}
