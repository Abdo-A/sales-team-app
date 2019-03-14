import { Toast } from 'native-base';

import { colors } from '../../../../assets/styles/base';

const QuickHint = content => Toast.show({
  text: content,
  textStyle: {
    color: colors.primaryLight,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  duration: 1500,
});

export default QuickHint;
