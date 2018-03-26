import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { AppRegistry, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import I18n from './src/locales';
import registerScreens from './src/screens';
// import configureStore from './src/store/configureStore';
import store from './src/store/configureStore';
import AppBootstrap from './src/AppBootstrap';
import { primaryFont } from './src/theme';

// const store = configureStore();

registerScreens(store, Provider);

AppRegistry.registerComponent('wevedo_app', () => AppBootstrap);

const startSingleScreenApp = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'wevedo.loginScreen',
      overrideBackPress: true,
      navigatorStyle: {
        navBarHidden: true,
        disabledBackGesture: true,
      },
    },
  });
};

// Icon.getImageSource('ios-home', 20, 'red').then((source) => {
//   source;
// });

const tabBasedApp = () => {
  Promise.all([
    Icon.getImageSource('home', 20),
    Icon.getImageSource('inbox', 20),
    Icon.getImageSource('gear', 20),
  ]).then((sources) => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: I18n.t('menu.home').toUpperCase(),
          screen: 'wevedo.HomeTab', // this is a registered name for a screen
          icon: sources[0],
          // selectedIcon: sources[1],
          title: I18n.t('menu.home'),
          overrideBackPress: true,
          navigatorStyle: {
            navBarBackgroundColor: '#d64635',
            navBarTextColor: 'white',
            navBarTextFontFamily: primaryFont,
          },
        },
        {
          label: I18n.t('menu.inbox').toUpperCase(),
          screen: 'wevedo.InboxTab',
          icon: sources[1],
          title: I18n.t('menu.inbox'),
          overrideBackPress: true,
          navigatorStyle: {
            navBarBackgroundColor: '#d64635',
            navBarTextColor: 'white',
            navBarTextFontFamily: primaryFont,
          },
        },
        {
          label: I18n.t('menu.my_profile').toUpperCase(),
          screen: 'wevedo.SettingsTab',
          icon: sources[2],
          title: I18n.t('menu.my_profile'),
          overrideBackPress: true,
          navigatorStyle: {
            navBarBackgroundColor: '#d64635',
            navBarTextColor: 'white',
            navBarTextFontFamily: primaryFont,
          },
        },
      ],
      tabsStyle: {
        tabBarButtonColor: '#c4c4c4',
        tabBarSelectedButtonColor: '#e91e63',
        // tabBarBackgroundColor: '#551A8B',
        // initialTabIndex: 1,
      },
    });
  });
};

const init = async () => {
  try {
    const token = await AsyncStorage.getItem('wevedo_access_token');
    if (token) {
      tabBasedApp();
    } else {
      startSingleScreenApp();
    }
  } catch ({ message }) {
    startSingleScreenApp();
  }
};

// init();
// tabBasedApp();
startSingleScreenApp();
