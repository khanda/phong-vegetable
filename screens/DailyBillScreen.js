import React from 'react';
import {Button, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WebBrowser} from 'expo';
import DailyBillContainer from "../containers/DailyBillContainer";
import DailyBillFilterFormContainer from "../containers/DailyBillFilterFormContainer";

class DailyBillScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Hóa đơn'
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <DailyBillFilterFormContainer/>
          <DailyBillContainer/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff'
  },
  contentContainer: {
    // paddingVertical: 20
  }
});

export default DailyBillScreen