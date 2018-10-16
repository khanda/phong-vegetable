import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import {View, Button, TextInput} from 'react-native'

const AddTodo = ({dispatch}) => {
  let input = 'item 1';

  function submitTodo(e) {
    console.log(input);
    if (!input || !input.trim()) {
      console.log('empty string is invalid');
      return
    }
    dispatch(addTodo(input));
    input = '';
  }

  return (
    <View>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={value => input = value}
        value={input}
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
