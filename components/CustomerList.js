import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import {Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Text, Thumbnail} from 'native-base';

const CustomerList = ({customers, selectCustomer}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <List dataArray={customers} renderRow={(item) =>
          <ListItem avatar key={item._id} onPress={() => selectCustomer(item._id)}>
            <Left>
              <Thumbnail small source={{uri: item.avatar}}/>
            </Left>
            <Body>
            <Text>{item.name}</Text>
            <Text note></Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward"/>
            </Right>
          </ListItem>
        }>
        </List>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});


export default CustomerList
