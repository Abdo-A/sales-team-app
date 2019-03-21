import { StyleSheet } from 'react-native';

import {
  gaps,
  colors,
  fontSizes,
  fontTypes,
} from '../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 120,
    alignSelf: 'center',
  },
  error: {
    color: colors.error,
    fontSize: fontSizes.md,
    alignSelf: 'center',
  },
  info: {
    color: colors.primaryLight,
    fontSize: fontSizes.md,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  registerGuide: {
    marginTop: gaps.lg,
    alignSelf: 'center',
  },
  registerGuideTextStyle: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    fontFamily: fontTypes.main,
  },
});

export default styles;
