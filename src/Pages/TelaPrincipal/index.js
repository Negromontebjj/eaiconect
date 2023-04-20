import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ImageBackground  } from "react-native";
import { Logo } from "../../Component/logo";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { StackRoutes } from "../../Routes/stackNaoAutorizados";
import { useNavigation } from "@react-navigation/native";


export default function TelaPrincipal() {
  const [pesquisa, setPesquisa] = useState('');
  const navigation = useNavigation();
  function FuncaoPesquisa() {
    alert(pesquisa)
  }

  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground
      source={require('../img/bg/bgEAI.png')}
        style={styles.imagemFundo}
      >
        <Logo />



      <Text style={styles.text}>Encontre a Tecnologia</Text>
      <Text style={styles.text}>que você precisa!</Text>



      <TouchableOpacity style={styles.botaoAtivar}>
        <Entypo style={styles.textLogin} name="login" size={35} color="#FFF" />
        <Text
          style={styles.textLogin}
          onPress={() => navigation.navigate('Login')} >LOGIN</Text>
      </TouchableOpacity>

      </ImageBackground>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  imagemFundo: {
    flex: 1,
    resizeMode: "cover",
    width: '100%',
    borderWidth: 1,
    shadowColor:'#000',
    shadowOffset: {
      width: 1,
      height: 7
    },
    elevation: 8,
    shadowOpacity: 1,
    shadowRadius: 8,
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 20,

  },


  botaoAtivar: {
    position: 'absolute',
    bottom: 140,

    backgroundColor: '#e76041',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 160,
    width: 160,
    borderRadius: 100,
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
  textLogin: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'

  },
  saibamais:{
    fontSize: 18,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  textSaibaMais:{
    position:'absolute',
    bottom:0,
    fontSize: 18,
    color: '#fff',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  }
})


