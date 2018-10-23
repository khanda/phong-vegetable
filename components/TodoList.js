import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import {StyleSheet, View} from 'react-native'
import {List} from 'react-native-elements'

const TodoList = ({todos, toggleTodo}) => (
  <View style={styles.container}>
    <List>
      {
        todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => toggleTodo(todo.id)}
          />
        ))
      }
    </List>

  </View>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});


export default TodoList
