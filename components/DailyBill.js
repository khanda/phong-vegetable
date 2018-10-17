import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import moment from 'moment'

class DailyBill extends React.Component {
  static navigationOptions = {
    title: 'Daily Bill'
  };

  constructor(props) {
    super(props);
    this.state = {
      filter: {
        date: moment().add(-1, 'day').toDate()
      },
      bill: {}
    }
  }

  render() {
    console.log(this.state.filter);

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5
  }
});


export default DailyBill
