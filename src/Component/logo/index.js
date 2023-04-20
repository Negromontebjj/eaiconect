import { View, Image, StyleSheet, SafeAreaView } from "react-native";

export function Logo() {
  return (
    <SafeAreaView>

      <View>
        <Image
          style={styles.logo}
          source={require('../../Pages/img/logo/logoLaranja.png')}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 70,
    height: 150,
    width: 300,
    justifyContent: 'center'
  },
  textlogo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
})



