import React, {Component} from 'react'
import {Text, View} from 'react-native'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'

import AddEntry from './components/AddEntry'
import History from './components/History'

export default class App extends Component {
  render() {
    const store = createStore(reducer)

    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <History />
        </View>
      </Provider>
    )
  }
}
