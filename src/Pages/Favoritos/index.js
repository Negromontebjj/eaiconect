import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { Logo } from "../../Component/logo";

export function Favoritos() {

  function Insta(){
    alert('Clicou no Instagran')
  }

  function Face(){
    alert('Clicou no Facebook')
  }

  function Email(){
    alert('Clicou no E-mail')
  }

  function Site(){
    alert('Clicou no Site')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Logo />
        <Text style={styles.textsaibamais}>Saiba mais...</Text>
      </View>
      <View style={styles.RedesS}>
          <TouchableOpacity onPress={() => Insta()}>
            <Image
              style={styles.Image}
              source={require("../img/rede_social/instagran.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Face()}>
            <Image
              style={styles.Image}
              source={require("../img/rede_social/facebook.png")}
            />
            </TouchableOpacity>
        </View>
        <View style={styles.RedesS}>
              <TouchableOpacity onPress={() => Email()}>
              <Image
                style={styles.Image}
                source={require("../img/rede_social/email2.png")}
              />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Site()}>
              <Image
                style={styles.ImageSite}
                source={require("../img/rede_social/site1.png")}
              />
            </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',

    paddingStart: 14,
    paddingEnd: 14,
    alignItems: 'center'
  },
  textsaibamais: {
    marginTop: 30,
    textAlign: 'center',
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',

  },

  Image: {
    marginTop: 30,
    height: 80,
    width: 80,
    marginLeft: 30,
    marginRight: 30

  },
  ImageSite: {
    marginTop: 30,
    height: 90,
    width: 95,
    marginLeft: 30,
    marginRight: 30

  },


  RedesS:{
    flexDirection: 'row',
    margin : 20,

  }

})
