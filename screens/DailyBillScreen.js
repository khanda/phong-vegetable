import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WebBrowser} from 'expo';
import DailyBill from "../components/DailyBill";

class DailyBillScreen extends React.Component {
  static navigationOptions = {
    title: 'Hóa đơn'
  };

  render() {
    const _id = this.props.navigation.getParam('_id', null);
    const name = this.props.navigation.getParam('name', null);
    const avatar = this.props.navigation.getParam('avatar', '');
    const customer = {
      _id: _id,
      name: name,
      avatar: avatar
    };

    return (
      <View style={styles.container}>
        <DailyBill navigation={this.props.navigation} customer={customer}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default DailyBillScreen