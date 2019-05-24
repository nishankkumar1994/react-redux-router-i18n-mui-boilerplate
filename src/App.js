import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import i18n from './i18n';

import configureStore from './app/store';

import Routes from './routes';

import './styles/styles.scss';

import THEME from './theme';

const theme = createMuiTheme(THEME);

const App = () => (
  <Provider store={configureStore()}>
    <I18nextProvider i18n={i18n}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Routes />
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    </I18nextProvider>
  </Provider>
);

export default App;
