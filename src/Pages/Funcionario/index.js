import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Image, ActivityIndicator, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo, FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth';
import api from '../../Services/api';


export default function Funcionario() {
  const navigation = useNavigation();
  const [posts, setPosts] = React.useState(null)
  const { nome, fone } = useContext(AuthContext)
  const numero = fone.telefone
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);



   const getFuncionario = async () => {
    try {
      const resposta = await fetch('http://localhost:3000/Funcionario/');
      const json = await resposta.json();
      setData(json.response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFuncionario();
  }, []);



  return (

    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.notificacao}>
        <Entypo style={styles.info} name="info-with-circle" size={40} color="#fff" />

      </View>
      <View style={{ padding: 24 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ CodFuncionario }) => CodFuncionario}
            renderItem={({ item }) => (
              <View style={styles.boxLogado}>
                <Text style={styles.logado}>Nº Celular Logado : {item.Telefone}</Text>
                <Text style={styles.logado}>E-mail Logado : {item.Email}</Text>
              </View>
            )}
          />
        )}
      </View>



      <View style={styles.notificacao}>
        <TouchableOpacity onPress={() => navigation.navigate('Notificacao')}>
          <Ionicons name="notifications" size={40} color="#ff3" />
        </TouchableOpacity>
      </View>

      <View style={styles.containerBox}>
        <View>
          <TouchableOpacity style={styles.boxqrcode} onPress={() => navigation.navigate('Ativacao')}>
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

          <TouchableOpacity style={styles.boxqrcode} onPress={() => navigation.navigate('HistoricoServico')}>
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



          <TouchableOpacity style={styles.boxqrcode} onPress={() => navigation.navigate('Perfil')}>
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
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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

  },

  logo: {
    width: 100,
    height: 100,

  },
  divLogo: {

    justifyContent: 'center',
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
    marginTop: 20,

  },

  boxqrcode: {

    height: 120,
    width: 120,
    backgroundColor: '#e76041',
    borderWidth: 2,
    margin: 5,
    borderRadius: 15,
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

  notificacao: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,

  }


})



