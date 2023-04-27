import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

export default function Notificacao({ route }) {
  const [modalVisible, setModalVisible] = useState(false)
  const [tipoServico, setTipoServico] = useState('Serviço Pendente')
  const [corBoxAndamento, setCorBoxAndamento] = useState('#fff')
  const [selectLista, setSelectLista] = useState()
  const funcionario = route.params?.teste
  const CodFuncionario = funcionario.CodFuncionario
  const [user, setUser] = useState({});
  const navigation = useNavigation();


  const baseURL = `https://eaiconecta-api.onrender.com/agendamento/${CodFuncionario}`;

  useEffect(() => {
    axios.get(baseURL)
      .then((resposta) => {
        //setUser(response.data)
        var servicos = resposta.data
        //console.log(servicos)
        var ListServico = servicos.response
        setUser(ListServico)
        console.log(ListServico)
      });

  }, []);
  if (!user) return null;

  function TrocaAcao() {
    setTipoServico('Em Andamento')
    setModalVisible(false)
  }


  function AddServico() {
    setModalVisible(true)
  }

  function ListaServico(props) {

    return (
      <View>
        <TouchableOpacity onPress={() => AddServico()}>
          <View style={styles.container}>
            <View style={styles.Lista}>
              <View>
                <Text style={styles.text1}>{tipoServico}: ..... nº {props.data.CodAgendamento} </Text>
              </View>
              <View>
                <Text style={styles.text}>Solicitante : {props.data.Nome}</Text>
                <Text style={styles.text}>Horario da Solicitação : {props.data.HoraServico}</Text>
                <Text style={styles.text}>Tamanho do Local : {props.data.MedidasLocal}</Text>
                <Text style={styles.text}>Serviço a execução : {props.data.InfoAdicionais}</Text>
                <Text style={styles.text}>CEP : {props.data.CEP}</Text>
                <Text style={styles.text}>Lougradouro : {props.data.Lougradouro}</Text>
                <Text style={styles.text}>Numero : {props.data.Numero}</Text>
                <Text style={styles.text}>Bairro : {props.data.Bairro}</Text>
                <Text style={styles.text}>Ponto de Referência : {props.data.PontoDeRef}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.boxModal}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.Modal}>
              <Text style={styles.textModal}>Deseja Executar este serviço?  </Text>

              <View style={styles.Botoes}>
                <TouchableOpacity style={styles.ModalButtonSIM} onPress={() => TrocaAcao()}>
                  <Text style={styles.textbotaoSIM}>Sim</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ModalButtonNAO} onPress={() => setModalVisible(false)} >
                  <Text style={styles.textbotaoNAO}>Não</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    )
  }




  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.CodAgendamento}
        data={user}
        renderItem={({ item }) => <ListaServico data={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    justifyContent: 'center',
  },

  Modal: {
    marginTop: 360,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',

    backgroundColor: '#E6E6FA',
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 8
    },
    elevation: 8,
    shadowOpacity: 1,
    shadowRadius: 8,
  },

  Botoes: {
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 10
  },

  ModalButtonSIM: {
    height: 50,
    width: 60,
    backgroundColor: '#008000',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',

  },
  textbotaoSIM: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },

  textbotaoNAO: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },


  ModalButtonNAO: {

    height: 50,
    width: 60,
    backgroundColor: '#FF0000',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10

  },

  textModal: {
    marginLeft: 10,
    marginRight: 10,
    color: '#000',
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',

  },


  Lista: {
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: '#fff',
    height: 280,
    marginBottom: 5,
    marginHorizontal: 20

  },
  text1: {
    textAlign: 'center',
    margin: 5,
    marginTop: 10,
    color: '#191970',
    fontSize: 18,
    fontWeight: 'bold'
  },
  text: {
    margin: 2,
    marginHorizontal: 20,
    color: '#000'
  },

})









