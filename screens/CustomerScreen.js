import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WebBrowser} from 'expo';
import CustomerStack from "../navigation/MainTabNavigator";


class CustomerScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <CustomerStack/>
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
  footer: {}
});

export default CustomerScreen