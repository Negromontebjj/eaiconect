import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Image, ActivityIndicator, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo, FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth';




export default function TelaFuncionario({route}) {
  const navigation = useNavigation();
  const {user} = useContext(AuthContext);
  const funcionario = route.params?.teste


  return (

    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.notificacao}>
        <Entypo  name="info-with-circle" size={25} color="#fff" />
      </View>
      <View style={styles.notificacao}>
        <Text style={styles.info}>Olá : {funcionario.Nome}  </Text>
      </View>
      <View style={styles.notificacao}>
        <Text style={styles.info}>Telefone : {funcionario.Telefone}  </Text>
      </View>
      <View style={styles.notificacao}>
        <Text style={styles.info}>Email : {funcionario.Email}</Text>
      </View>
      <View style={styles.notificacaoSino}>
        <TouchableOpacity onPress={() => navigation.navigate('Notificacao')}>
          <Ionicons name="notifications" size={70} color="#ff3" />
        </TouchableOpacity>
      </View>

      <View style={styles.containerBox}>
        <View>
          <TouchableOpacity style={styles.boxqrcode} onPress={() => navigation.navigate('Ativacao', {teste:funcionario})}>
            <View style={styles.imgqrcode}>
              <Entypo name="key" size={60} color="#fff" />
            </View>
            <View>
              <Text style={styles.textqrcode} > Ativação por Código</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxqrcode} onPress={() => navigation.navigate('Qrcode')}>
            <View style={styles.imgqrcode}>
              <AntDesign name="qrcode" size={60} color="#fff" />
            </View>
            <View>
              <Text style={styles.textqrcode} > Ativação por Qrcode</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxqrcode} onPress={() => navigation.navigate('Chat')}>
            <View style={styles.imgqrcode}>
              <Entypo name="chat" size={60} color="#fff" />
            </View>
            <View>
              <Text style={styles.textqrcode} > Canal de Dúvidas</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View>

          <TouchableOpacity style={styles.boxqrcode} onPress={() => navigation.navigate('HistoricoServico', {teste:funcionario})}>
            <View style={styles.imgqrcode}>
              <FontAwesome name="history" size={60} color="#fff" />
            </View>
            <View>
              <Text style={styles.textqrcode} > Histórico de Serviço </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxqrcode} onPress={() => navigation.navigate('EnviarEmail')}>
            <View style={styles.imgqrcode}>
              <Entypo name="mail" size={60} color="#fff" />
            </View>
            <View>
              <Text style={styles.textqrcode} > Solicitar Chave de Ativação </Text>
            </View>
          </TouchableOpacity>



          <TouchableOpacity style={styles.boxqrcode} onPress={() => navigation.navigate('Perfil', {teste:funcionario})}>
            <View style={styles.imgqrcode}>
              <FontAwesome name="gear" size={60} color="#fff" />
            </View>
            <View>
              <Text style={styles.textqrcode} > Perfil </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <KeyboardAvoidingView>
        <TouchableOpacity onPress={() => navigation.navigate('TelaPrincipal')}>
          <View style={styles.divLogo}>
            <Image
              style={styles.logo}
              source={require("../img/logo/logo.png")}
            />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    justifyContent: 'center',
    alignItems: 'center'

  },

  logo: {
    marginTop: 15,
    width: 90,
    height: 90,

  },
  divLogo: {
    marginTop: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  boxLogado:{
    justifyContent: 'center',
    alignItems: 'center',
  },

  logado: {
    color:'#fff',
    fontSize: 18

  },

  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },

  containerBox: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',


  },

  boxqrcode: {

    height: 120,
    width: 120,
    backgroundColor: '#e76041',
    borderWidth: 2,
    margin: 5,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 6,
    shadowOpacity: 1,
    shadowRadius: 6,
  },

  imgqrcode: {
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10
  },

  textqrcode: {
    marginTop: 1,
    padding: 5,
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },

  box1: {
    height: 110,
    width: 110,
    backgroundColor: '#000',
    borderColor: '#000',
    borderWidth: 5,
    margin: 40,
    borderRadius: 15,
  },

  icone: {
    width: '15%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  GerarPdf: {
    flexDirection: 'row',
    justifyContent: 'center'

  },
  info: {
    fontSize: 16,
    color: '#fff',
    borderRadius: 20,
    marginLeft: 25,
    marginTop: 5,

  },



  informacoesFunc: {
    fontFamily: 'Roboto',
    color: '#fff',
    fontSize: 16,
    margin: 10,
    textAlign: 'center',
  },
  numero: {
    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ff6'
  },

  notificacaoSino: {

    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 30,
  }


})



