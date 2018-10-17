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

function formatDate(date) {
  return '20-11-2018';
}

class DailyBill extends React.Component {
  static navigationOptions = {
    title: 'Hóa đơn'
  };

  constructor(props) {
    super(props);
    this.state = {
      filter: {
        date: moment().add(-1, 'day').toDate()
      },
      bill: {}
    }
  }

  onPressView() {
    alert('11');
  }

  render() {
    const {navigation} = this.props;
    const _id = navigation.getParam('_id', null);
    const name = navigation.getParam('name', null);
    const avatar = navigation.getParam('avatar', '');

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <ListItem
            key={_id}
            title={name}
            roundAvatar
            avatar={{uri: avatar}}
            rightIcon={{name: 'chevron-right', color: 'transparent'}}
          />
          <Form ref={c => this._form = c}
                value={this.state.filter}
                type={DailyBillFilter}
                options={options}
          />
          <Button title="Xem" backgroundColor="green" onPress={this.onPressView}/>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5
  }
});


export default DailyBill
