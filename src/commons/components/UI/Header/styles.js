import { StyleSheet } from 'react-native';
import {
  fontTypes, fontSizes, colors, gaps,
} from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    margin: gaps.md,
    alignSelf: 'center',
    alignItems: 'center',
    width: '80%',

  },
  text: {
    fontSize: fontSizes.huge,
    fontFamily: fontTypes.mainLight,
    color: colors.primary,
  },
});

export default styles;
