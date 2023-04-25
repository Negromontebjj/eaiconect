import React, {useState} from "react"
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet } from "react-native"


export function Finalizar({handleClose, handleSIM, handleNAO}) {

  return(
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{flex: 1 , zIndex:9}} onPress={handleClose}></TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.textModal}>Deseja Realmente Finalizar?</Text>
        <TouchableOpacity
          style={styles.ModalButton}
          onPress={handleSIM}
        >
          <Text style={styles.botao}>Sim</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ModalButton}
          onPress={handleNAO}
        >
          <Text style={[styles.botao, styles.Cancelar]}>Não</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  content:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
    backgroundColor: '#F4A460',
    marginVertical: 90,
    borderRadius: 30,
    height: 90,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop:15,
    paddingBottom: 15,
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

  ModalButton:{
    zIndex: 80,
    backgroundColor: '#191970',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  botao: {
    flex: 1,
    flexDirection:'row',
    textAlign: 'center',

    fontWeight: ' bold',
    padding:10,
    fontSize: 24,
    color: '#fff'

  },
  Cancelar:{
    color: 'red',

  },
  textModal:{

    textAlign: 'center',
    fontWeight: ' bold',
    fontSize: 14,

  }
})
