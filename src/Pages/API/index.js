import React, { Component } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native-web";


export default class API extends Component {

  static navigationOptions = {
    draweLabel: "API",

    drawerIcon: ({ focused, tintColor }) => (
      <Image
      source={require("../img/logo/logoLaranja.png")}

      />
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  loadUsers = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then(res => res.json())
      .then(res => {
        this.setstate({
          data: res.results || []
        })
      })
  }

  componentDidMount() {
    this.loadUsers();
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({item})=> (

            <View>
                <Image
                  source={{uri: item.picture.thumbnail}}
                  style={styles.avatar}
                />
              <View style={styles.info}>
                <Text style={styles.email}>{item.email}</Text>
                <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
              </View>
            </View>

          )}
          keyExtractor={item => item.email}
        />
      </View>

    )
}

}

const styles = StyleSheet.create({
 container:{
  marginTop: 10,
  marginLeft: 10,
  backgroundColor: '#fff',
  borderBottomWidth: 0
 },
 logo:{
  width: 100,
  height: 100
 }
})


