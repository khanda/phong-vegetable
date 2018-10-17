import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WebBrowser} from 'expo';
import {Footer} from "../components/Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import CustomerList from "../components/CustomerList";

export default class CustomerScreen extends React.Component {
  static navigationOptions = {
    title: 'Customer'
  };

  render() {
    return (
      <View style={styles.container}>
        <CustomerList></CustomerList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  footer:{

  }
});
