import React from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import {Container, Header, Content, List, ListItem, Text, Left, Right, Body, Thumbnail, Button} from 'native-base';
import NavigationService from "../navigation/NavigationService";
import getDateString from "../filters/dateFilter";


const DailyBill = ({billItems, date, customer}) => {
  console.log(date);
  console.log(customer);
  console.log(billItems);

  function isBillEmpty(items) {
    return date && (!items || items.length === 0);
  }

  function showEmptyMessage() {
    if (isBillEmpty(billItems)) {
      return (
        <View>
          <Text>Chưa có hóa đơn cho ngày {getDateString(date)}</Text>
          <Button success onPress={() => NavigationService.navigate('BillForm', {isEdit: false})}>
            <Text>Thêm hóa đơn</Text>
          </Button>
        </View>
      )
    }
  }

  function showDescriptionText() {
    if (!date || isBillEmpty(billItems)) return null;

    return (
      <Text style={styles.descriptionText}>Hóa đơn ngày
        <Text style={styles.customerInfo}> {getDateString(date)} </Text> của
        <Text style={styles.customerInfo}> {customer.name} </Text>
      </Text>
    )
  }

  return (
    <View style={styles.container}>
      {showEmptyMessage()}
      {showDescriptionText()}

      <List style={styles.listContainer} dataArray={billItems} renderRow={(item) =>
        <ListItem>
          <Left>
            <Text>{item.name}</Text>
          </Left>
          <Right>
            <Text>{item.quantity}</Text>
          </Right>
        </ListItem>
      }>
      </List>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  descriptionText: {
    padding: 10
  },
  customerInfo: {
    fontWeight: 'bold'
  },
  listContainer: {
    borderTopWidth: 0.5,
    borderTopColor: 'gray'

  }
});

export default DailyBill
