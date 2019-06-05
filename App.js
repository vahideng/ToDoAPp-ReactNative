import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';
import Lists from './components/lists/List/list';
import TextInputToDo from './components/TextInput/TextInput';

const instructions = Platform.select({
  ios: 'If you are using IOS, enjoy',
  android: 'Throw your plastic phone away'
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    currentItem: null,
    text: null,
    lists: [],
    index: null
  };

  inputHandler = text => {
    this.setState({ text });
  };

  addToList = () => {
    if (this.state.text.trim() === '') return;

    this.setState(prevState => {
      return {
        lists: prevState.lists.concat(prevState.text)
      };
    });
    this.setState({ text: '' });
  };

  deletHandler = index => {
    this.setState({ index });
    this.state.lists.splice(index, 1);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to TO-DO App!</Text>
        <TextInputToDo
          inputHandler={this.inputHandler}
          addToList={this.addToList}
          value={this.state.text}
        />

        <Text style={styles.welcome}>{this.state.text}</Text>
        {this.state.lists.map((list, index) => {
          return (
            <Lists
              key={index}
              name={list}
              delete={() => this.deletHandler(index)}
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  TextInput: {
    width: '90%',
    padding: '10%'
  }
});
