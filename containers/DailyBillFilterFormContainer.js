import React from 'react'
import {connect} from 'react-redux'
import {ScrollView, StyleSheet, View} from 'react-native'
import {ListItem} from 'react-native-elements'
import {getBill} from "../actions";
import {Button, Container, Content, DatePicker, Header, Spinner, Text} from 'native-base';
import {getBillDate, isLoading} from "../reducers/dailyBill";
import {getSelectedCustomer} from "../reducers/customer";


const DailyBillFilterForm = ({customer, date, isLoading, onGetBill}) => {

  var filter = {
    // date: moment().add(-1, 'day').toDate(),
    date: new Date(),
  };

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
    filter.date = newDate;
  }

  return (
    <View style={styles.container}>
      {getCustomer()}

      <View style={styles.form}>

        <Text>Chọn ngày cần xem hóa đơn</Text>
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
        <Button full success onPress={() => onGetBill(filter.date, null)}>
          <Text>Lấy hóa đơn</Text>
          {/*{isLoading && <Spinner color='white'/>}*/}
        </Button>

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
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray'
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
  onGetBill: (date, customerId) => dispatch(getBill(date, customerId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DailyBillFilterForm)