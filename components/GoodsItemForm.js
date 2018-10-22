import React from 'react'
import {ScrollView, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native'
import {Button, Icon, Text} from 'native-base';

const MAX_QUANTITY = 1000;

const GoodsItemForm = ({goods, increase, decrease, changeQuantity}) => {
  var error = null;

  function isValid(value) {
    if (!value) return false;
    const positiveIntegerRegex = RegExp('^[1-9]+\\d*$');
    return value == 0 || positiveIntegerRegex.test(value);
  }

  function hideError() {
    error = false;
  }

  function showError() {
    error = true;
  }

  function onChangeQuantityInput(value) {
    hideError();
    if (!isValid(value)) {
      showError();
      return;
    }
    changeQuantity(value);
  }

  function increaseQuantity() {
    if (goods.quantity === MAX_QUANTITY) return;
    increase(goods._id)
  }

  function decreaseQuantity() {
    if (goods.quantity === 0) return;
    decrease(goods._id)
  }

  return (
    <View style={styles.colContainer}>
      <View style={styles.rowContainer}>
        {/*LEFT*/}
        <View style={styles.leftContainer}>
          <Text style={styles.label}>{goods.name}</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={onChangeQuantityInput}
            value={String(goods.quantity)}

          />
        </View>
        {/*RIGHT*/}
        <View style={styles.rightContainer}>
          <Button small success onPress={increaseQuantity}>
            <Text>Tăng</Text>
          </Button>
          <Button small danger onPress={decreaseQuantity}>
            <Text>Giảm</Text>
          </Button>
        </View>
      </View>
      {
        error ? (
          <View style={styles.error}>
            <Text style={styles.errorMsg}>Số lượng là số lớn hơn hoặc bằng 0</Text>
          </View>
        ) : null
      }

    </View>
  )
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
