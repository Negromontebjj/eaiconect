import { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Notificacao() {
  const [modalVisible, setModalVisible] = useState(false)
  const [tipoServico, setTipoServico] = useState('Serviço Pendente')
  const [selectLista, setSelectLista] = useState()
  const navigation = useNavigation();
  const [feed, setFeed] = useState([
    {
      id: '01',
      empresaSolicitante: 'RH',
      horarioSolicitacao: '15:46',
      solicitadoPor: 'Tatiane',
      servico: 'Desinfeccao'
    },

    {
      id: '02',
      empresaSolicitante: 'Hospital Portugues',
      horarioSolicitacao: '11:29',
      solicitadoPor: 'Francisca',
      servico: 'Desinfeccao'
    },

    {
      id: '03',
      empresaSolicitante: 'Jubileu',
      horarioSolicitacao: '13:11',
      solicitadoPor: 'Jubileu',
      servico: 'Desinfeccao'
    },

    {
      id: '04',
      empresaSolicitante: 'JBS',
      horarioSolicitacao: '14:19',
      solicitadoPor: 'Rafael',
      servico: 'Desinfeccao'
    },

    {
      id: '05',
      empresaSolicitante: 'Apple',
      horarioSolicitacao: '07:19',
      solicitadoPor: 'Cristian',
      servico: 'Desinfeccao'
    },
  ]);



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
                <Text style={styles.text1}>{tipoServico}: ..... nº {props.data.id} </Text>
              </View>
              <View>
                <Text style={styles.text}>Solicitante : {props.data.empresaSolicitante}</Text>
                <Text style={styles.text}>Horario da Solicitação : {props.data.horarioSolicitacao}</Text>
                <Text style={styles.text}>Solicitado Por : {props.data.solicitadoPor}</Text>
                <Text style={styles.text}>Serviço a execução : {props.data.servico}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <Modal
          animationType="fade"
          style={styles.boxModal}
          transparent={true}
          visible={modalVisible}>
          <View style={styles.Modal}>
            <Text style={styles.textModal}>Deseja Executar este serviço? </Text>

            <View style={styles.Botoes}>
            <TouchableOpacity style={styles.ModalButtonSIM} onPress={()=> TrocaAcao()}>
              <Text style={styles.textbotaoSIM}>Sim</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ModalButtonNAO} onPress={() => setModalVisible(false)} >
              <Text style={styles.textbotaoNAO}>Não</Text>
            </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  }




  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={feed}
        renderItem={({ item }) => <ListaServico data={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',

  },



  Modal: {
    marginTop: 20,
    alignSelf:'center',
    alignContent:'center',
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
    flex: .2,
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

  Botoes:{
    marginTop: 20,
    flexDirection: 'row'
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

  textbotaoNAO:{
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
    height: 200,
    marginBottom: 10,
    marginHorizontal: 20

  },
  text1: {
    textAlign:'center',
    margin: 10,
    marginTop: 10,
    color: '#191970',
    fontSize: 18,
    fontWeight: 'bold'
  },
  text: {
    margin: 5,
    marginHorizontal: 10,
    color: '#000'
  },

})









