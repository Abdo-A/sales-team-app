import { StyleSheet } from 'react-native';
import { gaps, fontSizes } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    margin: gaps.xxsm,
    paddingHorizontal: 10,
    paddingBottom: 5,
    paddingTop: 3,
    alignSelf: 'center',
    borderRadius: 4,
  },
  errorText:{
    fontSize:fontSizes.sm
  },
  infoText:{
    fontWeight: 'bold',
    fontSize:fontSizes.sm 
  }
});

export default styles;
