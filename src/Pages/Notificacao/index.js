import { View, Text, StyleSheet } from "react-native";

export function Notificacao() {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Serviços Disponíveis!</Text>
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
    fontSize: 22
  }
})
