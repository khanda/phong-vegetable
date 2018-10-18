import React from 'react'
import {Button, ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements'

const GoodsItemForm = ({goods}) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexRowContainer}>
        <Text style={styles.label}>{goods.name}</Text>
        <Text style={styles.label}>{goods.quantity}</Text>
      </View>
      <View style={styles.flexRowContainer}>
        <TouchableOpacity style={styles.plusBtn} onPress={() => console.log('hello')}>
          <Icon style={styles.actionButton}
                name='plus'
                size={26}
                type='font-awesome'
                color='white'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.minusBtn} onPress={() => console.log('hello')}>
          <Icon style={styles.actionButton}
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
  flexRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 17
  },
  actionButton: {
    paddingLeft: 10,
    paddingRight: 10
  },
  plusBtn: {
    backgroundColor: 'green',
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius:5
  },
  minusBtn: {
    backgroundColor: 'red',
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius:5
  }

});

export default GoodsItemForm
