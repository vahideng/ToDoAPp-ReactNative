import React from 'react';
import { View, TextInput, Button ,StyleSheet} from 'react-native';

const textInputTodo = props => {
  return (
    <View style={styles.container}>
      <TextInput value={props.value} style={styles.TextInput} placeholder="add" onChangeText={(text)=>props.inputHandler(text)}/>
      <Button
        title="Add"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        onPress={props.addToList}
      />
    </View>
  );
};

export default textInputTodo;


const styles=StyleSheet.create({

  container :{
    flexDirection : "row"
  },
  TextInput:{
    width :"60%",
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
  }

})