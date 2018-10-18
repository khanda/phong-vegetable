import React from 'react'
import {connect} from 'react-redux'
import {ScrollView, StyleSheet, View} from 'react-native'
import GoodsItemForm from "../components/GoodsItemForm";


const BillFormContainer = ({customer, dispatch}) => {

  var goodsList = [
    {_id: 1, name: 'Hành', quantity: 2},
    {_id: 2, name: 'Tỏi', quantity: 3},
    {_id: 3, name: 'Dưa chuột', quantity: 0},
    {_id: 4, name: 'Cà rốt', quantity: 1},
    {_id: 5, name: 'Cà tím', quantity: 1},
    {_id: 6, name: 'Bí', quantity: 5},
    {_id: 7, name: 'Khoai tây', quantity: 1},
    {_id: 8, name: 'Mùi', quantity: 1},
    {_id: 9, name: 'ớt', quantity: 3},
    {_id: 10, name: 'Ngô', quantity: 3},
    {_id: 11, name: 'Thì là', quantity: 3},
    {_id: 12, name: 'Cam', quantity: 3},
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {
          goodsList.map((goods) => (
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

export default connect()(BillFormContainer)