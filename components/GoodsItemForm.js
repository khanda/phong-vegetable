import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import {MonoText} from "./StyledText";

const GoodsItemForm = ({goods}) => {
  return (
    <View style={styles.container}>
      <MonoText>{goods.name}</MonoText>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {}
});

export default GoodsItemForm
