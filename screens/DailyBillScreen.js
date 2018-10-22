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
      title: 'Hóa đơn',
      headerRight: (
        <Button
          onPress={() => navigation.navigate('BillForm')}
          title="Thêm"
        />
      )
    }
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
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <DailyBillFilterFormContainer customer={customer}/>
          <DailyBillContainer/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  contentContainer: {
    // paddingVertical: 20
  }
});

export default DailyBillScreen