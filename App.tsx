import { SafeAreaProvider } from "react-native-safe-area-context";
import MyStatusBar from "./src/components/MyStatusBar";
import AppNavigator from "./src/navigation/AppNavigator";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persister } from "./src/redux/Store";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <GestureHandlerRootView style={{flex:1}}>
        <SafeAreaProvider>
          <MyStatusBar
            backgroundColor={"transparent"}
            barStyle="light-content"
            hidden={true}
          />
          <AppNavigator />
        </SafeAreaProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

export default App;
