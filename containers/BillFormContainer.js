import React from 'react'
import {connect} from 'react-redux'
import {ScrollView, StyleSheet, View} from 'react-native'
import GoodsItemForm from "../components/GoodsItemForm";
import {getBillByCustomer} from "../reducers/dailyBill";
import {Container, Header, Content, Button, Text} from 'native-base';
import {changeBillItem, increaseItem, toggleTodo} from "../actions";

const BillFormContainer = ({bill, increase, decrease, changeQuantity}) => {
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
  contentContainer: {
    paddingVertical: 20
  }

});

const mapStateToProps = (state) => ({
  bill: getBillByCustomer(state, 0)
});
const mapDispatchToProps = dispatch => ({
  increase: _id => dispatch(increaseItem(_id, 1)),
  decrease: _id => dispatch(increaseItem(_id, -1)),
  changeQuantity: (_id, value) => dispatch(changeBillItem(_id, value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BillFormContainer)