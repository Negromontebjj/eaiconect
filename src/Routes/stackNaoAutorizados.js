import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../Pages/TelaPrincipal";
import Login from "../Pages/Login";
import StackRoutes from "./StackRoutes";

const Stack = createNativeStackNavigator();

export function stackNaoAutorizados() {

  return (
    <Stack.Navigator initialRouteName="TelaPrincipal">
      <Stack.Screen
        name="TelaPrincipal"
        component={StackRoutes}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />


    </Stack.Navigator>
  )
}
