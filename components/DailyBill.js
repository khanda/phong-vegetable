import React from 'react'
import {ScrollView, StyleSheet, View, Text} from 'react-native'
import moment from 'moment'
import {ListItem} from 'react-native-elements'
import t from 'tcomb-form-native';

const DailyBillFilter = t.struct({
  date: t.Date
});
const options = {
  fields: {
    date: {
      label: 'Ngày',
      error: 'Chỉ chọn ngày trong quá khứ',
      help: 'Chọn ngày để xem nội dung hóa đơn',
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
