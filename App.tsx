import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyStatusBar from './src/components/MyStatusBar';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persister } from './src/redux/Store';
import { Colors } from './src/styles/AppStyle';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <SafeAreaProvider>
          <MyStatusBar
            backgroundColor={Colors.primary}
            barStyle="light-content"
          />
          <AppNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
