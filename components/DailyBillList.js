import React from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import {List, ListItem} from 'react-native-elements'

const DailyBillList = ({dailyBillItems}) => {
  console.log('dailyBillItems: ',dailyBillItems);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
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
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {}
});

export default DailyBillList
