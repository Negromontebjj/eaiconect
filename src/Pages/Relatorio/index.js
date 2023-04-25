import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput, Platform} from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';



export default function Relatorio({route}) {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [solicitado, setSolicitado] = useState('');
  const [servico, setServico] = useState('');
  const [horario, setHorario] = useState('');
  const [data, setData] = useState('');
  const inicioServico = '10:25'
  const fimServico = '11:08'
  const totalServico = '43 minutos'

  const funcionario = route.params?.teste

const html = `
  <html>
    <body>
      <img src="https://catalogo.raymundodafonte.com.br/uploads/marcas/HqB47Kpcbxx7pXfVj56trfl5YO8UcIRHOXaf5F3W.png" width="70" height="70" >
      <h1 style='color:green'>Relatório!</h1>
      <br>
      <hr>
      <h2 style='color:red'>Dados do funcionário</h2>
      <h4>Nome :  ${funcionario.Nome}</h4>
      <h4>Email : ${funcionario.Email}</h4>
      <h4>Numéro : ${funcionario.Telefone}</h4>
      <hr>
      <h2 style='color:red'>Serviços Executados!</h2>
      <h4>Empresa Solicitante : Hostpital Português</h4>
      <h4>Serviço Utilizado : Robô Desinfecção de Vírus</h4>
      <hr>
      <h2 style='color:red'>Tempo de Execução</h2>
      <h4>Inicio do Serviço : ${inicioServico}</h4>
      <h4>Fim do Serviço : ${fimServico}</h4>
      <h4>Tempo gasto do Serviço : ${totalServico}</h4>
      <h4>Data do Serviço : 22/04/2023</h4>
      <hr>
      <h2 style='color:red'>Observação:</h2>
      <h4>null</h4>





    </body>
  </html>

  `;

let gerarPDF = async () => {
  const file = await printToFileAsync({
    html: html,
    base64: false
  });
  await shareAsync(file.uri);
}

function Finalizou() {
  alert('Serviço Finalizado, Muito Obrigado!')
  navigation.navigate('TelaPrincipal')
}



  return (
      <KeyboardAvoidingView
      behavior='padding'
      style={styles.container}>

        <View style={styles.Rel}>
          <Text style={styles.textRelatorio}>RELATÓRIO DE SERVIÇO:</Text>
        </View>

          <View style={styles.inforRelatorio}>
            <Text style={styles.Relatorio}>Solicitado Por : </Text>
            <Text style={styles.text}>Brilux</Text>
          </View>

          <View style={styles.inforRelatorio}>
            <Text style={styles.Relatorio}>Serviço Executado Por :</Text>
            <Text style={styles.text}>{funcionario.Nome}</Text>
          </View>

          <View style={styles.inforRelatorio}>
            <Text style={styles.Relatorio}>Nº Celular do funcionário :</Text>
            <Text style={styles.text}>{funcionario.Telefone}</Text>
          </View>

          <View style={styles.inforRelatorio}>
            <Text style={styles.Relatorio}>Inicio de Serviço as : </Text>
            <Text style={styles.text}>10:23</Text>
          </View>

          <View style={styles.inforRelatorio}>
            <Text style={styles.Relatorio}>Fim do Serviço as : </Text>
            <Text style={styles.text}>11:17</Text>
          </View>

          <View style={styles.inforRelatorio}>
          <Text style={styles.Relatorio}>Data do Serviço : </Text>
          <Text style={styles.text}>22/04/2023</Text>
          </View>

          <Text style={styles.Relatorio}>Obs:</Text>
          <TextInput
            style={styles.TextArea}
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            placeholder='OBS:'

          />

        <View style={styles.botoes}>
          <TouchableOpacity style={styles.finalizar} onPress={() => Finalizou()}>

            <AntDesign name="checksquare" size={40} color="#fff" />
            <Text style={styles.textfinalizar}>Finalizar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gerarpdf} onPress={()=> gerarPDF()}>
            <MaterialCommunityIcons name="cloud-download" size={45} color="#fff" />
            <Text style={styles.downloadPDF}> Download PDF</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>


  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',

  },

  inforRelatorio:{
    flexDirection:'row',

  },

  text:{
    color: '#e76041',
    paddingLeft: 20,
    fontSize: 18,
    marginTop: 15,
  },

  textRelatorio: {

    fontSize: 20,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    fontWeight: 'bold'

  },
  Rel: {

    fontSize: 20,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e76041',
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#000',
    shadowColor:'#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 6,
    shadowOpacity: 1,
    shadowRadius: 6,



  },
  Rel1: {

    fontSize: 20,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#000',
    shadowColor:'#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 6,
    shadowOpacity: 1,
    shadowRadius: 6,

  },

  informacoes:{
    paddingLeft: 20,
    fontSize: 20,
    marginTop: 3,
    color: '#fff'
  },

  informacoesFunc:{
    paddingLeft: 20,
    fontSize: 14,
    marginTop: 3,
    color: '#fff'

  },
  Relatorio:{
    marginTop: 15,
    fontSize: 18,
    color: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,

  },
  finalizar:{

    color: '#fff',
    backgroundColor: '#008000',
    marginTop: 40,
    height: 100,
    width: 100,
    alignItems: 'center',
    borderRadius:30,
    padding: 10,
    borderWidth: 2,
    borderColor: '#000',
    shadowColor:'#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 6,
    shadowOpacity: 1,
    shadowRadius: 6,

  },
  textfinalizar:{
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

  },
  gerarpdf:{

    alignItems: 'center',
    textAlign: 'center',
    marginTop: 40,

    color: '#fff',
    height: 100,
    width: 100,
    fontWeight: 'bold',
    backgroundColor: '#e76041',



    borderRadius:30,
    padding: 10,
    borderWidth: 2,
    borderColor: '#000',
    shadowColor:'#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 6,
    shadowOpacity: 1,
    shadowRadius: 6,

  },
  downloadPDF:{
    fontSize: 9.7,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botoes:{

    flexDirection:'row',
    margin: 10,
    justifyContent: 'center',
    paddingRight: 10
  },

  TextArea:{
    backgroundColor: '#fff',
    color: '#000',
    marginBottom: 14,
    borderRadius: 4,

    height: 94,
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center'
  }

})
