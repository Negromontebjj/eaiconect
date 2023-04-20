import React from "react";
import { View, Modal, ActivityIndicator, StyleSheet } from "react-native";

export default function Loading({visible}) {
  return(
    <Modal transparent visible={visible}>
      <View style={styles.loading}>
        <ActivityIndicator
          size="large"
          color={'#f54'}
          animating={true}

        />
      </View>
    </Modal>
  )
}


const styles = StyleSheet.create({
  loading:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
