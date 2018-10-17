import React from 'react'
import {connect} from 'react-redux'
import {Button, StyleSheet, TextInput, View} from 'react-native'
import t from 'tcomb-form-native';
import {addTodo} from "../actions";
import DB from "../DB";

const TodoModel = t.struct({
  text: t.String
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

  function getAllTodo() {
    DB.todos.get_all(function (result) {
      console.log(result);
    })
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

    DB.todos.add(model, function (added_data) {
      console.log(added_data);
    })

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

      <Button onPress={getAllTodo} title="get user" color="#841584"/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

export default connect()(AddTodo)
