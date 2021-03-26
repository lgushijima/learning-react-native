import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {gray, purple, white} from '../utils/colors'

export default function UdaciStepper({
  max,
  unit,
  step,
  value,
  onIncrement,
  onDecrement,
}) {
  return (
    <View style={[styles.row, {justifyContent: 'space-between'}]}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.androidBtn} onPress={onDecrement}>
          <Icon name="minus" size={30} color={white} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.androidBtn} onPress={onIncrement}>
          <Icon name="plus" size={30} color={white} />
        </TouchableOpacity>
      </View>
      <View style={styles.metricCounter}>
        <Text style={{fontSize: 24, textAlign: 'center'}}>{value}</Text>
        <Text style={{fontSize: 18, color: gray}}>{unit}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  androidBtn: {
    margin: 5,
    backgroundColor: purple,
    padding: 10,
    borderRadius: 2,
  },
  iosBtn: {
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
