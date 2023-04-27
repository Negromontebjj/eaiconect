import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, Fontisto, MaterialIcons } from '@expo/vector-icons';
import { ModalPerg } from '../ModalPerg';
import Loading from '../../Component/loading';
import * as Speech from 'expo-speech';
import { Finalizar } from '../../Component/Finalizar';


export default function Ativacao({route}) {
  const [inputText, setInputText] = useState('');
  const [pagModal, setPagModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const [text, setText] = useState('Agora o Robô está Ativado, Bom Trabalho...')
  const funcionario = route.params?.teste

  function speak() {
      Speech.speak(text, {
        language: 'pt-BR'
      });
  }
  function Ativar() {
    if (inputText === '') {
      alert('Insira o código, Por Favor! ')
    } else {
      setVisible(true);
      setTimeout(() => {
        setVisible(false)
        speak();
        alert('Robô Ativado! Bom Trabalho...')
      }, 3000)
    }
  }

  const Relatorio = () => {
    navigation.navigate('Relatorio', {teste:funcionario})
    setPagModal(false)
  }


  return (
    <SafeAreaView style={styles.geral}>

      <MaterialCommunityIcons name="key-wireless" size={120} color="#fff" />

      <View style={styles.container}>
        <Text style={styles.text}>Insira a chave de ativação</Text>
        <TextInput
          placeholder='Insira Chave de Ativação'
          style={styles.textInput}
          onChangeText={(inputText) => setInputText(inputText)}
          value={inputText}
        />
        <TouchableOpacity style={styles.botaoAtivar}>
          <Fontisto name="checkbox-active" size={25} color="#fff" />
          <Loading visible={visible} />
          <Text
            style={styles.textAtivar}
            onPress={() => Ativar()}>Ativar o Robô</Text>
        </TouchableOpacity>

        <View style={styles.FinEsoli}>
          <TouchableOpacity style={styles.botaoFinalizar} onPress={() => { setPagModal(true) }}>
            <MaterialIcons name="mobile-friendly" size={28} color="#fff" />
            <Text style={styles.textFinalizar}>Finalizar Serviço</Text>
          </TouchableOpacity>
          <Modal
            animationType="fade"
            transparent={true}
            visible={pagModal}
            onRequestClose={() => setPagModal(false)}
            style={styles.Modal}
          >
            <Finalizar

              handleClose={() => setPagModal(false)}
              handleSIM={() => Relatorio()}
              handleNAO={() => setPagModal(false)}
            />
          </Modal>

          <TouchableOpacity style={styles.botaoSolicitar}>
            <MaterialCommunityIcons name="email-multiple-outline" size={28} color="#fff" />
            <Text
              style={styles.textSolicitar}
              onPress={() => navigation.navigate('EnviarEmail')}>Solicitar a Ativação</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  geral: {
    flex: 1,
    backgroundColor: '#191970',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },

  FinEsoli: {
    flexDirection: 'row'
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff'
  },
  textInput: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 50,
    width: 350,
    marginLeft: 10,
    marginRight: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
  },
  botaoAtivar: {
    backgroundColor: '#e76041',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 150,
    borderRadius: 20,
    marginTop: 20,
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

  botaoSolicitar: {
    backgroundColor: '#7B68EE',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 150,
    borderRadius: 20,
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

  botaoFinalizar: {
    margin:4,
    backgroundColor: '#008000',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 150,
    borderRadius: 20,
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
  divLogo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAtivar: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
  },
  textFinalizar: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
  },

  textSolicitar: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
  },

  Modal: {
    backgroundColor: '#e76041',
    margin: 5,
    padding: 20,
    borderRadius: 20,
    elevation: 10,
  },

  textModal: {
    fontSize: 27,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textRelatorio: {
    color: '#fff',
    fontSize: 20
  }

});
