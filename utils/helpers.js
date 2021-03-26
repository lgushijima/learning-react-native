import React from 'react'
import {View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {white, red, orange, blue, lightPurp, pink} from './colors'

const styles = StyleSheet.create({
  iconContainer: {
    padding: 5,
    borderRadius: 8,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
})

export function isBetween(num, x, y) {
  if (num >= x && num <= y) {
    return true
  }

  return false
}

export function calculateDirection(heading) {
  let direction = ''

  if (isBetween(heading, 0, 22.5)) {
    direction = 'North'
  } else if (isBetween(heading, 22.5, 67.5)) {
    direction = 'North East'
  } else if (isBetween(heading, 67.5, 112.5)) {
    direction = 'East'
  } else if (isBetween(heading, 112.5, 157.5)) {
    direction = 'South East'
  } else if (isBetween(heading, 157.5, 202.5)) {
    direction = 'South'
  } else if (isBetween(heading, 202.5, 247.5)) {
    direction = 'South West'
  } else if (isBetween(heading, 247.5, 292.5)) {
    direction = 'West'
  } else if (isBetween(heading, 292.5, 337.5)) {
    direction = 'North West'
  } else if (isBetween(heading, 337.5, 360)) {
    direction = 'North'
  } else {
    direction = 'Calculating'
  }

  return direction
}

export function timeToString(time = Date.now()) {
  const date = new Date(time)
  const todayUTC = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
  )
  return todayUTC.toISOString().split('T')[0]
}

export function getMetricMetaInfo(metric) {
  const info = {
    run: {
      displayNme: 'Run',
      max: 50,
      unit: 'miles',
      step: 1,
      type: 'steppers',
      getIcon() {
        return (
          <View style={[styles.iconContainer, {backgroundColor: red}]}>
            <Icon name="running" color={white} size={25} />
          </View>
        )
      },
    },
    bike: {
      displayNme: 'Bike',
      max: 100,
      unit: 'miles',
      step: 1,
      type: 'steppers',
      getIcon() {
        return (
          <View style={[styles.iconContainer, {backgroundColor: orange}]}>
            <Icon name="bicycle" color={white} size={25} />
          </View>
        )
      },
    },
    swim: {
      displayNme: 'Swim',
      max: 9900,
      unit: 'meters',
      step: 100,
      type: 'steppers',
      getIcon() {
        return (
          <View style={[styles.iconContainer, {backgroundColor: blue}]}>
            <Icon name="swimmer" color={white} size={25} />
          </View>
        )
      },
    },
    sleep: {
      displayNme: 'Sleep',
      max: 24,
      unit: 'hours',
      step: 1,
      type: 'slider',
      getIcon() {
        return (
          <View style={[styles.iconContainer, {backgroundColor: lightPurp}]}>
            <Icon name="bed" color={white} size={25} />
          </View>
        )
      },
    },
    eat: {
      displayNme: 'Eat',
      max: 10,
      unit: 'rating',
      step: 1,
      type: 'slider',
      getIcon() {
        return (
          <View style={[styles.iconContainer, {backgroundColor: pink}]}>
            <Icon name="hamburger" color={white} size={25} />
          </View>
        )
      },
    },
  }

  return metric ? info[metric] : info
}

export function getDailyReminderValue() {
  return [
    {
      today: "Don't forget to log your data today!",
    },
  ]
}
