import React from 'react'
import {ScrollView, StyleSheet, View, Text} from 'react-native'
import moment from 'moment'
import {ListItem} from 'react-native-elements'

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
    const {navigation} = this.props;
    const _id = navigation.getParam('_id', null);
    const name = navigation.getParam('name', null);
    const avatar = navigation.getParam('avatar', '');

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <ListItem
            key={_id}
            title={name}
            roundAvatar
            avatar={{uri: avatar}}
            rightIcon={{name: 'chevron-right', color: 'transparent'}}
          />
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
