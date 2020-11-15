import React from 'react'
import { createStackNavigator } from '@react-natigation/stack';
import AuthStackScreens from "./AuthStachScreens";
export default AppStackScreens = () => {
   const AppStack = creacteStackNavigator ();

   return (
       <AppStack.Navigator headerMode="node">
           <AppStack.Screen name="Auth" conpornent={AuthStackScreens}/>
       </AppStack.Navigator>
   )
}
