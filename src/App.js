import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import { Header } from './components/common';

const App = () => {
  return (
    <Provider store={createStore(reducer)}>
      <View>
        <Header headerText='Teck Stack'/>
      </View>
    </Provider>
  );
}

export default App;
