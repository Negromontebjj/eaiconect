import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../Pages/TelaPrincipal";
import Login from "../Pages/Login";
import TelaFuncionario from "../Pages/TelaFuncionario";
import HistoricoServico from "../Pages/HistoricoServico";
import EnviarEmail from "../Pages/EnviarEmail";
import Ativacao from "../Pages/Ativacao";
import ModalPerg from "../Pages/ModalPerg";
import Termo  from "../Pages/Termo";
import MaisInfo from "../Pages/MaisInfo";
import API from "../Pages/API";
import  Notificacao  from "../Pages/Notificacao";
import  Perfil  from "../Pages/Perfil";
import { Chat } from "../Pages/Chat";
import api from "../Services/api";
import Relatorio from "../Pages/Relatorio";


const Stack = createNativeStackNavigator();

export function StackRoutes() {
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

      <Stack.Screen
        name="TelaFuncionario"
        component={TelaFuncionario}
        options={{
          headerShown: true,
          title: "Tela do Funcionário"
        }}
      />

      <Stack.Screen
        name="HistoricoServico"
        component={HistoricoServico}
        options={{
          headerShown: true,
          title: "Histórico de Serviços"
        }}
      />

      <Stack.Screen
        name="EnviarEmail"
        component={EnviarEmail}
        options={{
          headerShown: true,
          title: "Solicitar Chave de Ativação"
        }}
      />

      <Stack.Screen
        name="Ativacao"
        component={Ativacao}
        options={{
          headerShown: true,
          title: "Ativação"
        }}
      />

      <Stack.Screen
        name="ModalPerg"
        component={ModalPerg}

      />

      <Stack.Screen
        name="Termo"
        component={Termo}
        options={{
          headerShown: true,
          title: "Contrato Termo de Uso!"
        }}
      />
      <Stack.Screen name="MaisInfo" component={MaisInfo} />
      <Stack.Screen name="API" component={API} />
      <Stack.Screen name="Notificacao" component={Notificacao} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="api" component={api} />
      <Stack.Screen name="Relatorio" component={Relatorio} />



    </Stack.Navigator>
  )
}
