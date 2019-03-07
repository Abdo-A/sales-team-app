import { StyleSheet } from 'react-native';

import { fontTypes, fontSizes } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 10,
    width: '80%',
    alignItems: 'center',
  },
  text: {
    textDecorationLine: 'underline',
    fontFamily: fontTypes.mainBold,
    fontSize: fontSizes.msm,
  },
});

export default styles;
