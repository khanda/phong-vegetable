import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Icon} from 'react-native-elements'

const Todo = ({onClick, completed, text}) => (
  <TouchableOpacity onPress={onClick}>
    <View style={styles.container}>
      <Text>{text}</Text>
      <Icon name='done' color={completed ? 'green' : 'transparent'}/>
    </View>
  </TouchableOpacity>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#d6d7da',
    paddingTop: 7,
    paddingBottom: 7
  }
});

export default Todo
