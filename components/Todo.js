import React from 'react'
import PropTypes from 'prop-types'
import {View, Text, StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements'
import {MonoText} from "./StyledText";


const Todo = ({onClick, completed, text}) => (
  <View>
    <View style={styles.container}>
      <MonoText onPress={onClick}>{text}</MonoText>
      <Icon name='done' color={completed ? 'green' : 'transparent'}/>
    </View>
  </View>
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
    justifyContent: 'space-between'
  }
});

export default Todo
