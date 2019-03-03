import { Font } from 'expo';

const loadAllFonts = fonts => fonts.map(font => Font.loadAsync(font));

export const loadFonts = loadAllFonts([
  {
    latoMedium: require('./Lato-Regular.ttf'),
  },
  {
    latoBold: require('./Lato-Bold.ttf'),
  },
  {
    latoHairline: require('./Lato-Hairline.ttf'),
  },
  {
    latoLight: require('./Lato-Light.ttf'),
  },
  // Native Base Fonts
  {
    Roboto: require('native-base/Fonts/Roboto.ttf'),
  },
  {
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  },
]);
