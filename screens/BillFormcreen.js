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
  }
});

export default BillFormScreen