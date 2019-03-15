import { StyleSheet } from 'react-native';
import { colors, fontTypes } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  listItemDivider: {
    backgroundColor: colors.secondary,
  },
  listItemDividerText: {
    fontFamily: fontTypes.mainBold,
    color: colors.trueWhite,
  },
  filler: {
    height: 100,
  },
});

export default styles;
