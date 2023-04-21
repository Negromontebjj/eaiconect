import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { Favoritos } from "../Pages/Favoritos";
import  Notificacao  from "../Pages/Notificacao";
import { StackRoutes } from './StackRoutes'


const Tab = createBottomTabNavigator();


export function Routes() {
  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#fff',

        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          height: 60

        }
      }}


    >
      <Tab.Screen
        name="TelaPrincipal"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="home" size={30}  color='#000'/>
            }
            return <Ionicons name="home-outline" size={30} />
          }
        }}
      />

      <Tab.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          headerShown: true,
          title: "Saiba Mais",
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="heart" size={30} color='#FF4141' />
            }
            return <Ionicons name="heart-outline" size={30} />
          }
        }}
      />


    </Tab.Navigator>


  )
}







