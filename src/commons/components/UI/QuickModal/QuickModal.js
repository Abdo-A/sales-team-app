import { Alert } from 'react-native';

// This modal can be a yes/no modal or an OK modal
// if you only pass the 'text', then, it will be an OK modal
const QuickModal = (text, onConfirm, onCancel = () => null) => Alert.alert(
  'Are you sure?',
  text,
  onConfirm
    ? [
      { text: 'Cancel', onPress: onCancel },
      { text: 'Yes', onPress: onConfirm },
    ]
    : [{ text: 'Ok', onPress: () => null }],
  { cancelable: false },
);

export default QuickModal;
