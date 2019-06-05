import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';

const list = props => (
  <TouchableHighlight onPress={props.delete}>
    <View style={styles.container}>
      <Text style={styles.Input} placeholder="add">
        {props.name}
      </Text>
      <Image
        style={styles.ImageStyle}
        source={{ uri: 'https://www.w3schools.com/images/picture.jpg' }}
      />
    </View>
  </TouchableHighlight>
);

export default list;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: '#D3D3D3'
  },
  Text: {
    fontSize: 26
  },

  ImageStyle: {
    width: 60,
    height: 60,
    textAlign: 'center'
  }
});
