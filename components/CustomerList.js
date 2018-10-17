import React from 'react'
import {List, ListItem} from 'react-native-elements'
import {Button, ScrollView, StyleSheet, View} from 'react-native'

class CustomerList extends React.Component {
  static navigationOptions = {
    title: 'Customers'
  };

  constructor(props) {
    super(props);
    this.state = {
      customers: [
        {_id: 1, name: 'John', avatar: 'http://parus.ua/files/image/12345/Auto/1661.JPG'},
        {_id: 2, name: 'Amy Farha', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
        {_id: 3, name: 'Chris Jackson', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'},
        {_id: 4, name: 'John', avatar: 'http://parus.ua/files/image/12345/Auto/1661.JPG'},
        {_id: 5, name: 'Amy Farha', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
        {_id: 6, name: 'Chris Jackson', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'},
        {_id: 7, name: 'John', avatar: 'http://parus.ua/files/image/12345/Auto/1661.JPG'},
        {_id: 8, name: 'Amy Farha', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
        {_id: 9, name: 'Chris Jackson', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'},
        {_id: 10, name: 'John', avatar: 'http://parus.ua/files/image/12345/Auto/1661.JPG'},
        {_id: 11, name: 'Amy Farha', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
        {_id: 12, name: 'Chris Jackson', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'},
      ]
    }
  }

  onPressItem(item) {
    this.props.navigation.navigate('DailyBill', item);
  }

  render() {
    const customers = this.state.customers;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <List>
            {
              customers.map((item) => (
                <ListItem
                  key={item._id}
                  title={item.name}
                  roundAvatar
                  avatar={{uri: item.avatar}}
                  onPress={() => this.onPressItem(item)}
                />
              ))
            }
          </List>
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


export default CustomerList
