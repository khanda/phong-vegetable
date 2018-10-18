import React from 'react'
import {connect} from 'react-redux'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import moment from 'moment'
import {Button, ListItem} from 'react-native-elements'
import t from 'tcomb-form-native';
import {getDailyBill} from "../actions";
import globalStyles from "../globalStyles";

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

const DailyBillFilterFormContainer = ({customer, dispatch}) => {

  var filter = {
    date: moment().add(-1, 'day').toDate()
  };

  function onPressView() {
    const value = _form.getValue();
    if (!value || !value.date) return;
    dispatch(getDailyBill(value.date));
  }

  return (
    <View style={styles.container}>
      <ListItem
        key={customer._id}
        title={customer.name}
        roundAvatar
        avatar={{uri: customer.avatar}}
        rightIcon={{name: 'chevron-right', color: 'transparent'}}
      />
      <View style={styles.form}>
        <Form ref={c => this._form = c}
              value={filter}
              type={DailyBillFilter}
              options={options}

        />
        <Button title="Xem" backgroundColor="green" onPress={onPressView}/>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 0
  },
  form: {
    padding: 5
  }
});

export default connect()(DailyBillFilterFormContainer)