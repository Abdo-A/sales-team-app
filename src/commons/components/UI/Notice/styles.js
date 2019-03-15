import { StyleSheet } from 'react-native';
import { fontTypes, colors } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 10,
    width: '80%',
    alignSelf: 'center',
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    fontFamily: fontTypes.mainBold,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 5,
  },
});

export default styles;
