import { StyleSheet } from 'react-native';

import { gaps, colors, fontSizes } from '../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  logo:{
    width: 300,
    height: 120,
    alignSelf:'center'
  },
  error:{color:colors.error,
    fontSize:fontSizes.md,
    alignSelf:'center'
  },
  registerGuide: {
    marginTop: gaps.lg,
    alignSelf: 'center',
  },
});

export default styles;
