import { View, Text, StyleSheet, Button } from "react-native";

export default function Qrcode() {

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Página em Contrução</Text>
      <Button title="Ler Qrcode"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#012089',
    justifyContent: 'center',
    alignItems: 'center',

  },
  text:{
    fontSize: 22,
    color: '#fff'
  }

})
