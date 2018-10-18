import React from 'react'
import {Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {Icon} from 'react-native-elements'
import _ from 'lodash'

const MAX_QUANTITY = 1000;
const GoodsItemForm = ({goods}) => {

  var cloneGoods = _.clone(goods);
  console.log(cloneGoods);

  function isValid(value) {
    if (!value) return false;
    const positiveIntegerRegex = RegExp('^[1-9]+\\d*$');
    return positiveIntegerRegex.test(value);
  }

  function onChangeQuantityInput(value) {
    if (!isValid(value)) return;
    console.log(value);
    cloneGoods.quantity = value;
  }

  function increase() {
    if (cloneGoods.quantity === MAX_QUANTITY) return;
    cloneGoods.quantity += 1;
    console.log(cloneGoods.quantity);
  }

  function decrease() {
    if (cloneGoods.quantity === 0) return;
    cloneGoods.quantity -= 1;
    console.log(cloneGoods.quantity);
  }

  return (
    <View style={styles.container}>
      {/*LEFT*/}
      <View style={styles.leftContainer}>
        <Text style={styles.label}>{cloneGoods.name}</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          returnKeyType="go"
          onChangeText={onChangeQuantityInput}
          value={String(cloneGoods.quantity)}

        />
      </View>
      {/*RIGHT*/}
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.plusBtn} onPress={increase}>
          <Icon
            name='plus'
            size={26}
            type='font-awesome'
            color='white'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.minusBtn} onPress={decrease}>
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
};

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
