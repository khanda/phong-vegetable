import React from 'react'
import {ScrollView, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native'
import {Button, Text, Icon} from 'native-base';

const MAX_QUANTITY = 1000;

class GoodsItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goods: props.goods,
      error: false
    };
    this.onChangeQuantityInput = this.onChangeQuantityInput.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  isValid(value) {
    if (!value) return false;
    const positiveIntegerRegex = RegExp('^[1-9]+\\d*$');
    return value == 0 || positiveIntegerRegex.test(value);
  }

  hideError() {
    this.setState({error: false});
  }

  showError() {
    this.setState({error: true});
  }

  onChangeQuantityInput(value) {
    this.hideError();
    if (!this.isValid(value)) {
      this.showError();
      return;
    }
    this.props.goods.quantity = value;
  }

  increase() {
    if (this.props.goods.quantity === MAX_QUANTITY) return;
    const currentGoods = this.state.goods;
    currentGoods.quantity = Number(currentGoods.quantity) + 1;
    this.setState({goods: currentGoods});
  }

  decrease() {
    if (this.state.goods.quantity === 0) return;
    const currentGoods = this.state.goods;
    currentGoods.quantity = Number(currentGoods.quantity) + 1;
    this.setState({goods: currentGoods});
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
            <Button small success onPress={this.increase}>
              <Text>Tăng</Text>
            </Button>
            <Button small danger onPress={this.decrease}>
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
