import '@src/assets/translation/i18next';
import '@src/config/reactotron';

import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import ModalAlert from '@components/ModalAlert';

import store, { persist } from '@src/redux/store';
import Routes from '@src/routes';
import Theme from '@src/theme';

const App: React.FC = () => {
  return (
    <Theme>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
          <ModalAlert />
          <Routes />
        </PersistGate>
      </Provider>
    </Theme>
  );
};

export default App;
