import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import {Button, StyleSheet, TextInput, View} from 'react-native'
import t from 'tcomb-form-native';

const TodoModel = t.struct({
  text: t.String
});

const options = {
  fields: {
    text: {
      label: 'Nội dung',
      error: 'Email không được để trống'
    },
  },
};

const Form = t.form.Form;

const AddTodo = ({dispatch}) => {

  function TodoEntity() {
    return {
      text: null
    }
  }

  function syncModelAndForm() {
    const value = _form.getValue();
    if (!value) return null;

    let model = new TodoEntity();
    model.text = value.text;

    return model;
  }

  function submitTodo() {
    let model = syncModelAndForm();
    if (!model) return;
    let text = model.text;
    if (!text || !text.trim()) return;
    dispatch(addTodo(text));
  }

  return (
    <View style={styles.container}>
      <Form ref={c => this._form = c}
            type={TodoModel}
            options={options}
      />
      <Button onPress={submitTodo} title="Sunmit" color="#841584"/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

export default connect()(AddTodo)
