import React from 'react'
import {Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {Icon} from 'react-native-elements'

const MAX_QUANTITY = 1000;

class GoodsItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goods: props.goods
    };
    this.onChangeQuantityInput = this.onChangeQuantityInput.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  isValid(value) {
    if (!value) return false;
    const positiveIntegerRegex = RegExp('^[1-9]+\\d*$');
    return positiveIntegerRegex.test(value);
  }

  onChangeQuantityInput(value) {
    if (!this.isValid(value)) return;
    console.log(value);
    this.props.goods.quantity = value;
  }

  increase() {
    if (this.props.goods.quantity === MAX_QUANTITY) return;
    this.state.goods.quantity += 1;
    console.log(this.state.goods.quantity);
  }

  decrease() {
    if (this.state.goods.quantity === 0) return;
    this.state.goods.quantity -= 1;
    console.log(this.state.goods.quantity);
  }

  render() {
    return (
      <View style={styles.container}>
        {/*LEFT*/}
        <View style={styles.leftContainer}>
          <Text style={styles.label}>{this.state.goods.name}</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            returnKeyType="go"
            onChangeText={this.onChangeQuantityInput}
            value={String(this.state.goods.quantity)}

          />
        </View>
        {/*RIGHT*/}
        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.plusBtn} onPress={this.increase}>
            <Icon
              name='plus'
              size={26}
              type='font-awesome'
              color='white'
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.minusBtn} onPress={this.decrease}>
            <Icon
              name='minus'
              size={26}
              type='font-awesome'
              color='white'
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
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
    borderBottomWidth: 0.5
  }
});

export default GoodsItemForm
