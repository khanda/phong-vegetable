import React from 'react'
import {connect} from 'react-redux'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import moment from 'moment'
import t from 'tcomb-form-native';
import globalStyles from "../globalStyles";
import GoodsItemForm from "../components/GoodsItemForm";

const DailyBillFilter = t.struct({
  date: t.Date
});

const options = {
  stylesheet: globalStyles.customDesign,
  fields: {
    date: {
      label: 'Chọn ngày',
      error: 'Chỉ chọn ngày trong quá khứ',
      maximumDate: new Date(),
      mode: 'date',
      config: {
        format: (date) => {
          return moment(date).format('DD-MM-YYYY');
        }
      }
    }
  }
};
const Form = t.form.Form;

const BillFormContainer = ({customer, dispatch}) => {

  var goodsList = [
    {_id: 1, name: 'Hành', quantity: 0},
    {_id: 2, name: 'Tỏi', quantity: 0},
  ];

  function onPressView() {
    // const value = _form.getValue();
  }

  return (
    <View style={styles.container}>
      <ScrollView>
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
    backgroundColor: '#fff'
  }
});

export default connect()(BillFormContainer)