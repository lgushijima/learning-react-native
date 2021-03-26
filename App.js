import React, {Component} from 'react'
import {Text, View} from 'react-native'
import AddEntry from './components/AddEntry'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'

export default class App extends Component {
  render() {
    const store = createStore(reducer)

    return (
      <Provider store={store}>
        <View>
          <Text>123</Text>
          <AddEntry />
        </View>
      </Provider>
    )
  }
}
