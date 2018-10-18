import React from 'react';
import {Button, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WebBrowser} from 'expo';
import BillFormContainer from "../containers/BillFormContainer";

class BillFormScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Tạo hóa đơn',
      headerRight: (
        <Button
          onPress={() => alert('Lưu tạm')}
          title="Lưu"
        />
      )
    }
  };

  render() {
    // const _id = this.props.navigation.getParam('_id', null);
    // const name = this.props.navigation.getParam('name', null);
    // const avatar = this.props.navigation.getParam('avatar', '');
    // const customer = {
    //   _id: _id,
    //   name: name,
    //   avatar: avatar
    // };

    return (
      <View style={styles.container}>
        <BillFormContainer/>
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

export default BillFormScreen