import React from 'react'
import {connect} from 'react-redux'
import {ScrollView, StyleSheet, View} from 'react-native'
import GoodsItemForm from "../components/GoodsItemForm";
import {getEditingBillByCustomer} from "../reducers/dailyBill";
import {Button, Container, Content, Header, Text} from 'native-base';
import {changeBillItem, increaseItem} from "../actions";

const BillFormContainer = ({bill, increase, decrease, changeQuantity}) => {
  console.log(bill);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {
          bill.map((goods) => (
            <GoodsItemForm key={goods._id}
                           goods={goods}
                           increase={increase}
                           decrease={decrease}
                           changeQuantity={changeQuantity}
            />
          ))
        }
      </ScrollView>
      <Button full success onPress={() => alert('123')}>
        <Text>Lưu</Text>
      </Button>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  contentContainer: {}

});

const mapStateToProps = (state) => {
  var bill = getEditingBillByCustomer(state, 0);
  console.log(bill);
  return {
    bill: bill
  }

};
const mapDispatchToProps = dispatch => ({
  increase: _id => dispatch(increaseItem(_id, 1)),
  decrease: _id => dispatch(increaseItem(_id, -1)),
  changeQuantity: (_id, value) => dispatch(changeBillItem(_id, value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BillFormContainer)