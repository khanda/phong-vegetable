import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WebBrowser} from 'expo';
import CustomerList from "../components/CustomerList";
import CustomerListContainer from "../containers/CustomerListContainer";
import DB from "../DB";

class CustomerListScreen extends React.Component {
  static navigationOptions = {
    title: 'Khách hàng',
    headerBackTitle: 'Khách hàng',
    headerTruncatedBackTitle: 'Khách hàng'
  };

  render() {
    DB.bills.erase_db(function(removed_data){
      console.log('REMOVE BILLS');
      console.log(removed_data);
    });
    return (
      <View style={styles.container}>
        <CustomerListContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default CustomerListScreen