import React, {useState, createContext, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";



export const AuthContext = createContext({})

function AuthProvider({children, visible}) {
  const [fone, setFone] = useState({});
  const [user, setUser] = useState({});
  const [filter, setFilter] = useState([]);
  const navigation = useNavigation();

  const baseURL = "https://eaiconecta-api.onrender.com/Funcionario";


  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
      //setUser(response.data)
      var teste = response.data
      var teste1 = teste.response
      setUser(teste1)
    });

  },[]);

  if (!user) return null;


  function signIn(telefone, senha) {
    if(telefone === '' || senha === '') {
      alert('Preencha os Campos, Agradecemos!')


    } else {
      const lista = user.filter((objeto) => {
        if(objeto.Telefone === telefone) {
          navigation.navigate('TelaFuncionario', {lista:objeto.Email})
          // console.log('Acertou')
          //console.log(objeto.Email)
        }})



        // const lista = user.filter((objeto) => objeto.Telefone === telefone);
        // console.log(objeto)

    }

        // const teste = user.filter(objeto => objeto.Telefone === telefone);
        // console.log(user)
        // console.log(user.Telefone)


      // if(telefone !== user.Telefone){
      //   alert('Telefone Errado')
      // }else {
      //   alert('la ele entrou')
      // }
      // console.log(user.Telefone)
        // setFone({
        //   telefone: telefone,
        //   status: 'Ativo',

        // })
        // console.log(fone)
        // navigation.navigate('Funcionario')

  }


  return (

        <AuthContext.Provider value={{signIn, fone, user}}>
          {children}
        </AuthContext.Provider>

  )
}

export default AuthProvider;


