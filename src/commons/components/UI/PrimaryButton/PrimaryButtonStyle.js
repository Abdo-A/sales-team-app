import { StyleSheet } from 'react-native';

import { colors, fontSizes } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    borderRadius: 20,
    margin: 10,
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
