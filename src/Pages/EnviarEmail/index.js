import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, } from 'react-native';
import emailjs from '@emailjs/browser';
import { FontAwesome } from '@expo/vector-icons';


export default function EnviarEmail() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === ''){
        alert('Preencha todos os campos, Obrigado!');
        return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email:email
    }

    emailjs.send('service_y3du0hw', 'template_33teg7n', templateParams, 'NwvDRXA2dp_gbIg5f')
    .then((response) => {
      console.log('Email Enviado', response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')

    },
    (err)=> {
      console.log('ERRO: ', err)
    })
  }

  return (

      <SafeAreaView style={styles.container}>
        <View style={styles.divLogo}>
          <Image
            style={styles.logo}
            source={require("../img/logo/logo.png")}
          />
        </View>
        <View >
          <Text style={styles.textContato}>CONTATO</Text>
        </View>



        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <TextInput
          style={styles.TextArea}
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <TouchableOpacity style={styles.button}>
          <FontAwesome style={styles.enviar} name="send" size={30} color="#fff" />
          <Text
            style={styles.textbotao}
            onPress={sendEmail}>Enviar</Text>
        </TouchableOpacity>
      </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191970',
    color: '#FFF',

  },
  input: {
    backgroundColor: '#fff',
    height: 50,
    width: 300,
    marginTop: 30,

    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 18,
  },
  TextArea: {
    backgroundColor: '#fff',
    color: '#000',
    marginBottom: 14,
    borderRadius: 4,

    height: 94,
    width: 300,
    fontSize: 18


  },
  button: {
    marginTop: 20,
    height: 80,
    width: 130,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 45,
    border: 1,
    backgroundColor: '#008000',
    fontSize: 23,

  },
  textbotao: {

    textAlign: 'center',
    color: '#fff',
    width: 160,
    fontSize: 18,
    margin: 10

  },

  logo: {
    marginTop: -100,
    width: 150,
    height: 150,


  },
  InputArea : {
    width: '85%',
    height: 50,
    color: '#000',
    padding: 20,
  },

  textContato:{
    color: '#fff',
    fontSize: 25,

  },
  enviar:{
    marginTop: 10
  }

})
