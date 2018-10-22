import React from 'react'
import {connect} from 'react-redux'
import {ScrollView, StyleSheet, View} from 'react-native'
import GoodsItemForm from "../components/GoodsItemForm";
import {getBillByCustomer} from "../reducers/dailyBillReducer";
import {Container, Header, Content, Button, Text} from 'native-base';

const BillFormContainer = ({bill}) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {
          bill.map((goods) => (
            <GoodsItemForm goods={goods} key={goods._id}/>
          ))
        }
      </ScrollView>
      <Button block success onPress={() => alert('123')}>
        <Text>Lưu</Text>
      </Button>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingVertical: 20
  }

});

const mapStateToProps = (state) => ({
  bill: getBillByCustomer(state, 0)
});

export default connect(mapStateToProps, null)(BillFormContainer)