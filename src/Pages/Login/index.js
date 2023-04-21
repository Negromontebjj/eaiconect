import React, { useState, useContext} from 'react';
import { Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, StyleSheet, Input } from 'react-native';
import { Ionicons, Feather, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';
import Loading from '../../Component/loading';
import { AuthContext } from '../../contexts/auth';


export default function Login() {
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('')
  const {signIn} = useContext(AuthContext);
  const [hidePass, setHidePass] = useState(true);
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  const [visible, setVisible] = useState(false)


  function Termo() {
    return navigation.navigate('Termo')
  }

  function Logar(){
    setVisible(true);
      setTimeout(() => {
      setVisible(false)
      signIn(telefone, senha)
    }, 1000)
  }



  return (
    <KeyboardAvoidingView
    behavior='padding'
    style={styles.container}>
      <View style={styles.divLogo}>

        <Image
          style={styles.logo}
          source={require("../img/logo/logoLaranja.png")}
        />
        <View>
          <Text style={styles.textLogin}>FAÇA SEU LOGIN</Text>
        </View>

      </View>

      <View style={styles.InputArea}>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder="Ex: 81999999999"
          value={telefone}
          onChangeText={(foneDigitado) => setTelefone(foneDigitado)}

        />

        <TouchableOpacity style={styles.icone}>
          <Feather name="smartphone" size={30} color="#000" sise={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.InputArea}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua Senha"
          value={senha}
          onChangeText={(senhaDigitado) => setSenha(senhaDigitado)}
          secureTextEntry={hidePass}
        />
        <TouchableOpacity style={styles.icone} onPress={() => setHidePass(!hidePass)}>
          {hidePass ?
            <Ionicons name="eye" size={30} color="#000" sise={30} />
            :
            <Ionicons name="eye-off" size={30} color="#000" sise={30} />
          }
        </TouchableOpacity>
      </View>

      <View>
        <Loading visible={visible}/>
        <TouchableOpacity style={styles.entrar} onPress={() => Logar()}>
          <Text style={styles.textentrar}>Entrar</Text>
          <Entypo name="chevron-with-circle-right" size={28} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.esqueceusenha}>
          <Text style={styles.textesqueceusenha}>Esqueceu a Senha</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.section}>

        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <TouchableOpacity onPress={()=> Termo()}>
          <Text style={styles.paragraph}>Termos de Uso!</Text>
        </TouchableOpacity>
      </View>


    </KeyboardAvoidingView >
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  auth: {
    marginTop: 10

  },

  logo: {
    width: 300,
    height: 150,
    marginBottom: 40
  },
  divLogo: {

    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: 20,
    textAlign: 'center',
    width: 230,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 6,
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  entrar: {

    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#008000',
    marginTop: 5,
    height: 80,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,

    borderWidth: 2,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 6,
    shadowOpacity: 1,
    shadowRadius: 6,

  },

  textentrar: {
    fontSize: 23,
    color: '#fff',
    fontWeight: 'bold',

  },

  criarconta: {
    padding: 30,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  esqueceusenha: {
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  textesqueceusenha: {
    color: '#fff',
  },

  InputArea: {
    flexDirection: 'row',
    width: '80%',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    marginTop: 40,
    marginLeft: 40,
    marginRight: 50,
    bottom: 10,
    elevation: 1,
    zIndex: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 5,
      height: 3,
    }

  },
  input: {
    width: 275,
    height: 50,
    color: '#000',
    padding: 8,

    fontSize: 14,
    borderRadius: 10,


  },
  icone: {
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',


  },


  section: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    color: '#fff',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  checkbox: {
    margin: 8,
  },
})
