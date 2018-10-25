import React from 'react'
import {connect} from 'react-redux'
import {ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native'
import {ListItem} from 'react-native-elements'
import {changeBillDate, getBill} from "../actions";
import {Button, Container, Content, DatePicker, Header, Spinner, Text} from 'native-base';
import {getBillDate, isLoading} from "../reducers/dailyBill";
import {getSelectedCustomer} from "../reducers/customer";

const DailyBillFilterForm = ({customer, date, isLoading, onGetBill, onChangeDate}) => {

  function getCustomer() {
    if (customer && customer._id) {
      return (
        <ListItem
          key={customer._id}
          title={customer.name}
          roundAvatar
          avatar={{uri: customer.avatar}}
          rightIcon={{name: 'chevron-right', color: 'transparent'}}
        />
      )
    }
    return null;
  }

  function setDate(newDate) {
    onChangeDate(newDate, customer);
  }

  return (
    <View style={styles.container}>
      {getCustomer()}

      <View style={styles.form}>
        <View>
          <Text style={styles.dateLabel}>Chọn ngày</Text>
          <DatePicker
            locale={"vi"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="ấn để chọn"
            textStyle={{color: "green"}}
            placeHolderTextStyle={{color: "#d3d3d3"}}
            onDateChange={setDate}
          />
        </View>
        <View style={styles.submitLayout}>
          {date &&
          <TouchableOpacity style={styles.getBillBtn} onPress={() => onGetBill(date, customer)}>
            <Text style={styles.submitText}>Lấy hóa đơn</Text>
          </TouchableOpacity>
          }
        </View>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    borderTopWidth: 0.1,
    borderTopColor: 'gray',
  },
  submitLayout: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff'
  },
  dateLabel: {
    paddingLeft: 10
  },
  getBillBtn: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    color: 'white'
  }
});
const mapStateToProps = (state) => {
  return {
    customer: getSelectedCustomer(state),
    date: getBillDate(state, 0),
    isLoading: isLoading(state)
  }
};
const mapDispatchToProps = dispatch => ({
  onGetBill: (date, customer) => dispatch(getBill(date, customer)),
  onChangeDate: (date, customer) => dispatch(changeBillDate(date, customer)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DailyBillFilterForm)