import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import {Button, StyleSheet, TextInput, View} from 'react-native'
import t from 'tcomb-form-native';
import tFormType from "../tFormType";

const TodoModel = t.struct({
  text: tFormType.email
});

const options = {
  // stylesheet: globalStyles.materialDesign,
  auto: 'none' || 'placeholders',
  order: ['text'],
  fields: {
    text: {
      label: 'Nội dung',
      error: 'invalid',
      placeholder: 'enter content',
      // help: 'this is help message'
    },
  },
};

const Form = t.form.Form;

const AddTodo = ({dispatch}) => {
  this.state = {
    model: new TodoEntity()
  };

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
            value={this.state.model}
            type={TodoModel}
            options={options}
            context={{locale: 'it-IT'}}
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
