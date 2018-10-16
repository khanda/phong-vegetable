import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import {Button, StyleSheet, TextInput, View} from 'react-native'
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'

const AddTodo = ({dispatch}) => {
  let model = {
    input: 'item 1'
  };

  function submitTodo() {
    let input = model.input;
    console.log(input);
    if (!input || !input.trim()) {
      console.log('empty string is invalid');
      return
    }
    dispatch(addTodo(input));
    updateState(null);
  }

  function updateState(inputValue) {
    console.log(inputValue);
    model.input = inputValue;
  }

  return (
    <View style={styles.container}>
      <FormInput onChangeText={value => updateState(value)} value={model.input}/>
      <Button onPress={submitTodo} title="Sunmit" color="#841584"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // paddingLeft: 5,
    // paddingRight: 5
  }
})

export default connect()(AddTodo)
