import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import {Button, Container, Content, Header, Left, List, ListItem, Right, Text, Thumbnail} from 'native-base';
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
          <Button small full success onPress={() => NavigationService.navigate('BillForm', {isEdit: false})}>
            <Text>Thêm hóa đơn</Text>
          </Button>
        </View>
      )
    }
  }

  function showDescriptionText() {
    if (!date || isBillEmpty(billItems)) return null;

    return (
      <View style={styles.billSummary}>
        <Text style={styles.billHeader}>Hóa đơn ngày
          <Text style={styles.customerInfo}> {getDateString(date)} </Text> của
          <Text style={styles.customerInfo}> {customer.name} </Text>
        </Text>
      </View>
    )
  }

  function showToolbar() {
    if (!date || isBillEmpty(billItems)) return null;

    return (
      <View style={styles.toolbar}>
        <Button small full warning onPress={() => alert('edit')}>
          <Text>Sửa</Text>
        </Button>
        <Button small full light onPress={() => alert('share')}>
          <Text>Chia sẻ</Text>
        </Button>
      </View>
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
      {showToolbar()}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 10,
  },
  billSummary: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray'
  },
  customerInfo: {
    fontWeight: 'bold'
  },
  billHeader: {},
  toolbar: {
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderBottomWidth: 0.5,
    // borderBottomColor: 'gray',
    // borderTopWidth: 0.5,
    // borderTopColor: 'gray'
  }
});

export default DailyBill
