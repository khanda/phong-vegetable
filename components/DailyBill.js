import React from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import moment from 'moment'
import {Button, ListItem} from 'react-native-elements'
import t from 'tcomb-form-native';

const DailyBillFilter = t.struct({
  date: t.Date
});
const options = {
  fields: {
    date: {
      label: 'Chọn ngày để xem nội dung hóa đơn',
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

const DailyBill = ({navigation, customer}) => {
  this.state = {
    filter: {
      date: moment().add(-1, 'day').toDate()
    },
    bill: {}
  };


  function onPressView() {
    console.log('on press');
  }

  console.log(customer);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <ListItem
          key={customer._id}
          title={customer.name}
          roundAvatar
          avatar={{uri: customer.avatar}}
          rightIcon={{name: 'chevron-right', color: 'transparent'}}
        />
        <Form ref={c => this._form = c}
              value={this.state.filter}
              type={DailyBillFilter}
              options={options}
        />
        <Button title="Xem" backgroundColor="green" onPress={onPressView}/>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  }
});


export default DailyBill
