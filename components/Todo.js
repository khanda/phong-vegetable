import React from 'react'
import PropTypes from 'prop-types'
import {View, Button} from 'react-native'

const Todo = ({onClick, completed, text}) => (
  <View>
    <Button
      title={text}
      onPress={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    />
  </View>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
