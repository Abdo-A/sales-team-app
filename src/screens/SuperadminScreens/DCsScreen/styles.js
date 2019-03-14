import { StyleSheet } from 'react-native';
import { colors, fontTypes } from '../../../assets/styles/base';

const styles = StyleSheet.create({
  listItemDivider: {
    backgroundColor: colors.secondary,
  },
  listItemDividerText: {
    fontFamily: fontTypes.mainBold,
    color: colors.trueWhite,
  },
  dcName: {
    fontWeight: 'bold',
  },
});

export default styles;
