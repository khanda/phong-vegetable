import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import {View, Button, TextInput} from 'react-native'

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
    updateState('');
  }

  function updateState(inputValue) {
    model.input = inputValue;
  }

  return (
    <View>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={value => updateState(value)}
        value={model.input}
      />
      <Button
        onPress={submitTodo}
        title="Sunmit"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}

export default connect()(AddTodo)
