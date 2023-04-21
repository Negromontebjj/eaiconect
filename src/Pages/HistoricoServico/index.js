import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, Fontisto, AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth';


export default function HistoricoServico({route}) {
  const navigation = useNavigation();
  const {fone} = useContext(AuthContext)
  const funcionario = route.params?.teste

    return (
    <KeyboardAvoidingView style={styles.container}>
      <Entypo style={styles.info} name="info-with-circle" size={45} color="#fff" />

      <View style={styles.header}>
        <Text style={styles.informacoesFunc}>Nº Celular Logado : {funcionario.Telefone}</Text>
      </View>

      <View style={styles.Rel}>
        <Text style={styles.textRelatorio}>Histórico de Serviço:</Text>
      </View>

      <View style={styles.servicos}>
        <View style={styles.Rel1}>
          <Text style={styles.Relatorio}>Total de Serviços executados!</Text>

        </View>
        <View style={styles.empresa}>
          <Text style={styles.informacoes}>{route.params?.qtdservico}</Text>
        </View>
      </View>

      <View style={styles.botoes}>
          <View >
            <TouchableOpacity style={styles.fecharInfo} onPress={() => navigation.navigate('MaisInfo')}>
              <MaterialCommunityIcons name="card-account-details" size={45} color="#fff" />
              <Text style={styles.textMaisInfo}>Mais Info...</Text>
            </TouchableOpacity>
          </View>
          <View >
            <TouchableOpacity style={styles.fechar} onPress={() => navigation.navigate('Home')}>
              <Fontisto name="close" size={45} color="#fff" />
              <Text style={styles.textFechar}>Fechar</Text>
            </TouchableOpacity>
            </View>
      </View>

    </KeyboardAvoidingView>


  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',


  },
  servicos: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  botoes:{
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  textFechar:{
    color: '#fff',
    fontSize: 16,
    marginTop: 6,
    fontWeight: 'bold'
  },

  textMaisInfo:{
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold'
  },
  fecharInfo:{
    color: '#fff',
    backgroundColor: '#008000',
    marginTop: 20,
    height: 100,
    width: 100,
    alignItems: 'center',
    borderRadius: 30,
    padding: 10,
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

  fechar: {

    color: '#fff',
    backgroundColor: '#800000',
    marginTop: 20,
    height: 100,
    width: 100,
    alignItems: 'center',
    borderRadius: 30,
    padding: 10,
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
  textfinalizar: {
    marginTop: 20,
    fontSize: 22,
    color: '#fff',

  },

  Info: {

    marginTop: 10,
    backgroundColor: '#e25b1e',
    height: 100,
    width: 150,
    alignItems: 'center',
    borderRadius: 10,

    borderWidth: 2,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 3,
    shadowOpacity: 1,
    shadowRadius: 6,
  },



  textRelatorio: {

    fontSize: 18,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    fontWeight: 'bold',


  },
  Rel: {

    fontSize: 18,
    color: '#fff',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#088',
    borderRadius: 20,
    marginTop: 30,
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
  Rel1: {
    flexDirection: 'row',
    fontSize: 20,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'right',
    borderRadius: 10,
    marginTop: 20,
    width: 250,



  },

  informacoes: {
    borderRadius: 30,
    backgroundColor: '#fff',

    alignContent: 'flex-end',
    fontSize: 20,
    marginTop: 20,
    color: '#000',
    fontWeight: 'bold',
    width: 100,
    height: 30
  },

  informacoesFunc: {
    paddingLeft: 20,
    fontSize: 14,
    marginTop: 3,
    color: '#000'

  },
  Relatorio: {
    fontSize: 16,
    color: '#fff',
    flexDirection: 'row',


    width: 300,




  },
  header:{
    margin: 5,
    backgroundColor: '#fff',
    height: 30,
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
  info:{

    borderRadius: 20,
    marginLeft: 25,
    marginTop: 10,

  },



})
