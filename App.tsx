import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// redux
import {Provider} from 'react-redux';
import {getPersistor} from '@rematch/persist';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store} from '~/store';

// components
import Containers from '~/containers';

const App = () => {
     
  //   const persistor = getPersistor();
  return (
    <Provider store={store}>
      <React.Fragment>
        {/* <PersistGate persistor={persistor}> */}
        <Containers />
        {/* </PersistGate> */}
      </React.Fragment>
    </Provider>
  );
};
export default App;
