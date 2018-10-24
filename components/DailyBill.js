import React from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import {Container, Header, Content, List, ListItem, Text, Left, Right, Body, Thumbnail, Button} from 'native-base';
import NavigationService from "../navigation/NavigationService";


const DailyBill = ({billItems, date}) => {
  function isBillEmpty(items) {
    return date && (!items || items.length === 0);
  }

  function showEmptyMessage() {
    if (isBillEmpty(billItems)) {
      return (
        <View>
          <Text>Chưa có hóa đơn cho ngày {date}</Text>
          <Button full success onPress={() => NavigationService.navigate('BillForm', {isEdit: false})}>
            <Text>Thêm hóa đơn</Text>
          </Button>
        </View>
      )
    }
  }

  return (
    <View style={styles.container}>
      {showEmptyMessage()}

      <List dataArray={billItems}
            renderRow={(item) =>
              <ListItem avatar>
                <Left>
                  {item.icon &&
                  <Thumbnail small source={{uri: item.icon}}/>
                  }
                </Left>
                <Body>
                <Text>{item.name}</Text>
                {/*<Text note></Text>*/}
                </Body>
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
  }
});

export default DailyBill
