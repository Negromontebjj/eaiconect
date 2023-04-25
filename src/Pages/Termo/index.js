import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity } from "react-native-web";
import Checkbox from 'expo-checkbox';
import { useNavigation } from "@react-navigation/native";


 export default function Termo(){
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation();

  return (

    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.section}>

        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <View>
          <Text style={styles.paragraph}>
            Termos de Uso!
          </Text>
        </View>
      </View>

      <View style={styles.ConcordaEdiscorda}>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
          <View>
            <Text style={styles.TextConcorda}>
              Concordo
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
          <View>
            <Text style={styles.TextNaoConcorda}>
              Não Concordo
            </Text>
          </View>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',


  },
  box: {

    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
    height: 600,
    width: 420,
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
  section: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    color: '#fff',
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },

  ConcordaEdiscorda: {
    flexDirection: 'row'
  },

  botao: {
    height: 40,
    width: 150,
    borderRadius: 10,
    backgroundColor: "#4F4F4F",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  TextConcorda: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'

  },
  TextNaoConcorda: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
})


