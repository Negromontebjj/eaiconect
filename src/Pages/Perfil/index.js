import { View, Text, StyleSheet } from "react-native";

export default function Perfil({route}) {
  const funcionario = route.params?.teste
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Pagina Perfil </Text>
      <Text style={styles.text}>Nome : {funcionario.Nome}</Text>
      <Text style={styles.text}>Email : {funcionario.Email}</Text>
      <Text style={styles.text}>Telefone : {funcionario.Telefone}</Text>
      <Text style={styles.text}>Cpf : {funcionario.CPF}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#012089'
  },
  text:{
    color: '#fff',
    fontSize: 22,
    padding: 5,

  }
})


