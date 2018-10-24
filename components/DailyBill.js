import React from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import {Container, Header, Content, List, ListItem, Text, Left, Right, Body, Thumbnail, Button} from 'native-base';
import NavigationService from "../navigation/NavigationService";
import getDateString from "../filters/dateFilter";


const DailyBill = ({billItems, date, customer, isShowAddMsg}) => {
  function isBillEmpty(items) {
    return date && (!items || items.length === 0);
  }

  function showEmptyMessage() {
    if (isShowAddMsg) {
      return (
        <View>
          <Text style={styles.descriptionText}>Chưa có hóa đơn cho ngày {getDateString(date)}</Text>
          <Button full success onPress={() => NavigationService.navigate('BillForm', {isEdit: false})}>
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

      {billItems && billItems.length > 0 &&
      <List dataArray={billItems} renderRow={(item) =>
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
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 10,
  },
  descriptionText: {
    padding: 10
  },
  customerInfo: {
    fontWeight: 'bold'
  }
});

export default DailyBill
