import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../Pages/TelaPrincipal";
import Login from "../Pages/Login";
import Funcionario from "../Pages/Funcionario";
import HistoricoServico from "../Pages/HistoricoServico";
import EnviarEmail from "../Pages/EnviarEmail";
import Ativacao from "../Pages/Ativacao";
import ModalPerg from "../Pages/ModalPerg";
import Termo  from "../Pages/Termo";
import MaisInfo from "../Pages/MaisInfo";
import API from "../Pages/API";
import { Notificacao } from "../Pages/Notificacao";
import { Perfil } from "../Pages/Perfil";
import { Chat } from "../Pages/Chat";
import api from "../Services/api";


const Stack = createNativeStackNavigator();

export function stackNaoAutorizados() {
  const auth = true;



  return (
    <Stack.Navigator initialRouteName="TelaPrincipal">
      <Stack.Screen
        name="TelaPrincipal"
        component={TelaPrincipal}
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
