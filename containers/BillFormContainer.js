import React from 'react'
import {connect} from 'react-redux'
import {ScrollView, StyleSheet, View} from 'react-native'
import GoodsItemForm from "../components/GoodsItemForm";
import {getEditingBillByCustomer, isLoading} from "../reducers/dailyBill";
import {Button, Container, Content, Header, Text, Spinner} from 'native-base';
import {addBill, changeBillItem, increaseItem} from "../actions";
import {KeyboardAvoidingView} from 'react-native';
import {getSelectedCustomer} from "../reducers/customer";

const BillFormContainer = ({bill, isLoading, customer, increase, decrease, changeQuantity, addBill}) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.helpContainer}>
          <Text style={styles.helpText}>
            Điền số lượng cho các mặt hàng sử dụng nút tăng giảm,
            hoặc ấn vào ô số lượng để điền bằng bàn phím.
          </Text>
        </View>
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
      <View style={styles.footer}>
        <Button full success onPress={() => addBill(bill, customer)}>
          <Text>Lưu</Text>
          {isLoading && <Spinner color='white'/>}
        </Button>
      </View>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column'
  },
  contentContainer: {
    paddingBottom: 20
  },
  helpContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    padding: 5
  },
  helpText: {
    opacity: 0.7
  },
  footer: {
    backgroundColor: 'white',
    paddingTop: 5
  }

});

const mapStateToProps = (state) => {
  return {
    bill: getEditingBillByCustomer(state, 0),
    isLoading: isLoading(state),
    customer: getSelectedCustomer(state),
  }
};
const mapDispatchToProps = dispatch => ({
  increase: _id => dispatch(increaseItem(_id, 1)),
  decrease: _id => dispatch(increaseItem(_id, -1)),
  changeQuantity: (_id, value) => dispatch(changeBillItem(_id, value)),
  addBill: (bill, customer) => dispatch(addBill(bill, customer)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BillFormContainer)