import { StyleSheet } from 'react-native';

import { colors, fontSizes, gaps } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    borderRadius: 20,
    margin: gaps.md,
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.trueWhite,
    fontWeight: 'bold',
    fontSize: fontSizes.sm,
  },
  textBig: { fontSize: 20 },
});

export default styles;
