import { StyleSheet } from 'react-native';

import { colors, fontTypes, fontSizes } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  pickerContainer: {
    borderColor: colors.primaryLight,
    borderWidth: 3,
    padding: 5,
    margin: 10,
    width: '80%',
    borderRadius: 8,
    alignSelf: 'center',
  },
  pickerText: {
    fontSize: fontSizes.md, fontWeight: 'bold', color: colors.gray03, fontFamily: fontTypes.main,
  },
});

export default styles;
