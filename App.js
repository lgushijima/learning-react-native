import 'react-native-gesture-handler'
import React, {Component} from 'react'
import {Text, View} from 'react-native'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'

import AddEntry from './components/AddEntry'
import History from './components/History'

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Teste from './components/Teste'
import Live from './components/Live'

import Ionicons from 'react-native-vector-icons/Ionicons'

const Tabs = createBottomTabNavigator()
export default class App extends Component {
  render() {
    const store = createStore(reducer)

    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <NavigationContainer>
            <Tabs.Navigator
              screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                  let iconName

                  if (route.name === 'Teste') {
                    iconName = focused
                      ? 'ios-information-circle'
                      : 'ios-information-circle-outline'
                  } else if (route.name === 'Live') {
                    iconName = focused ? 'ios-list-box' : 'ios-list'
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />
                },
              })}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              }}>
              <Tabs.Screen name="Teste" component={Teste} />
              <Tabs.Screen name="Live" component={Live} />
            </Tabs.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    )
  }
}
