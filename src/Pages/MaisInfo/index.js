import React, { useState, useEffect } from 'react';
  import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';


  const data = [
    { label: 'BomBril', value: '1'},
    { label: 'Marcelo', value: '2' },
    { label: 'Eduardo', value: '3' },
    { label: 'Vandilma', value: '4' },
    { label: 'Vitor Nadler', value: '5' },
    { label: 'Atacadão', value: '6' },
    { label: 'Hospital Português', value: '7' },
    { label: 'Restauração', value: '8' },
  ];

  const MaisInfo = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Selecione o Cliente
          </Text>
        );
      }
      return null;
    };


    useEffect(() => {
          <FlatList
            data={data}
            renderItem={(item)=><data {...item}/>}
            keyExtractor={(item) => item.value}
          />

      });



    return (
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Selecione Cliente' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            console.log(item.value)
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
    );
  }

  export default MaisInfo;

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#191970',
      padding: 16,
    },
    dropdown: {
      height: 60,
      width: 250,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      backgroundColor: '#fff',
    },
    icon: {
      marginRight: 7,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });
