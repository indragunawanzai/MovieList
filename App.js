import React from 'react'
import AppStack from './src/components/navigators/AppStack'
import {store} from './src/redux/store'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  )
}

export default App