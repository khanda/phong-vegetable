import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WebBrowser} from 'expo';
import CustomerList from "../components/CustomerList";

class CustomerListScreen extends React.Component {
  static navigationOptions = {
    title: 'Khách hàng'
  };

  render() {
    return (
      <View style={styles.container}>
        <CustomerList navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default CustomerListScreen