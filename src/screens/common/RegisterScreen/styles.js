import { StyleSheet } from 'react-native';
import { gaps, colors, fontSizes } from '../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingTop: gaps.xl,
  },
  error: {
    color: colors.error,
    fontSize: fontSizes.md,
    alignSelf: 'center',
  },
});

export default styles;
