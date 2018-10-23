import React from 'react'
import {ScrollView, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native'
import {Button, Icon, Text} from 'native-base';
import _ from 'lodash'

const MAX_QUANTITY = 1000;

class GoodsItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      goods: props.goods
    };
    this.onChangeQuantityInput = this.onChangeQuantityInput.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.hideError = this.hideError.bind(this);
    this.showError = this.showError.bind(this);
  }

  isValid(value) {
    if (!value) return false;
    const positiveIntegerRegex = RegExp('^[1-9]+\\d*$');
    return value == 0 || positiveIntegerRegex.test(value);
  }

  hideError() {
    this.setState({
      ...this.state,
      error: null
    })
  }

  showError() {
    this.setState({
      ...this.state,
      error: true
    })
  }

  onChangeQuantityInput(value) {
    if (!this.isValid(value)) {
      this.showError();
      return;
    }
    var newGoods = _.clone(this.state.goods);
    newGoods.quantity = Number(value);
    this.setState({error: null, goods: newGoods});
    this.props.changeQuantity(newGoods._id, value);
  }

  increaseQuantity() {
    if (this.state.goods.quantity === MAX_QUANTITY) return;
    var newGoods = _.clone(this.state.goods);
    newGoods.quantity = Number(this.state.goods.quantity) + 1;
    this.setState({error: null, goods: newGoods});
    this.props.increase(newGoods._id);
  }

  decreaseQuantity() {
    if (this.state.goods.quantity === 0) return;
    var newGoods = _.clone(this.state.goods);
    newGoods.quantity = Number(this.state.goods.quantity) - 1;
    this.setState({...this.state, goods: newGoods});
    this.props.decrease(newGoods._id);
  }

  render() {
    return (
      <View style={styles.colContainer}>
        <View style={styles.rowContainer}>
          {/*LEFT*/}
          <View style={styles.leftContainer}>
            <Text style={styles.label}>{this.state.goods.name}</Text>
            <TextInput
              style={styles.input}
              keyboardType='numeric'
              onChangeText={this.onChangeQuantityInput}
              value={String(this.state.goods.quantity)}

            />
          </View>
          {/*RIGHT*/}
          <View style={styles.rightContainer}>
            <Button small success onPress={this.increaseQuantity}>
              <Text>Tăng</Text>
            </Button>
            <Button small danger onPress={this.decreaseQuantity}>
              <Text>Giảm</Text>
            </Button>
          </View>
        </View>
        {
          this.state.error ? (
            <View style={styles.error}>
              <Text style={styles.errorMsg}>Số lượng là số lớn hơn hoặc bằng 0</Text>
            </View>
          ) : null
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  colContainer: {
    display: 'flex',
    flexDirection: 'column',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  leftContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 17
  },
  plusBtn: {
    backgroundColor: 'green',
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5
  },
  minusBtn: {
    backgroundColor: 'red',
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5
  },
  input: {
    // height: 40,
    width: 70,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.3
  },
  error: {
    paddingLeft: 10
  },
  errorMsg: {
    color: 'red'
  }
});

export default GoodsItemForm
