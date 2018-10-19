import React from 'react'
import {connect} from 'react-redux'
import {ScrollView, StyleSheet, View} from 'react-native'
import GoodsItemForm from "../components/GoodsItemForm";
import {getBillByCustomer} from "../reducers/dailyBillReducer";


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