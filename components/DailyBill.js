import React from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import {List, ListItem} from 'react-native-elements'

const DailyBill = ({dailyBillItems}) => {
  return (
    <View style={styles.container}>
      <List>
        {
          dailyBillItems.map((item) => (
            <ListItem
              key={item._id}
              title={item.name}
              subtitle={item.quantity}
              roundAvatar
              icon={{uri: item.icon}}
              rightIcon={{name: 'chevron-right', color: 'transparent'}}
            />
          ))
        }
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
