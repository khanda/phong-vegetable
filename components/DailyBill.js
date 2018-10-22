import React from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import {Container, Header, Content, List, ListItem, Text, Left, Right, Body, Thumbnail} from 'native-base';


const DailyBill = ({dailyBillItems}) => {
  return (
    <View style={styles.container}>

      <List dataArray={dailyBillItems}
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
