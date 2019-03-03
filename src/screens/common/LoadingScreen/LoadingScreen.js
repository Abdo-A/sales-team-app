import { ActivityIndicator, View } from 'react-native';
import React from 'react';

import { colors } from '../../../assets/styles/base';
import styles from './LoadingScreenStyles';

const LoadingScreen = () => {
  return (
    <View style={styles.root}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default LoadingScreen;
