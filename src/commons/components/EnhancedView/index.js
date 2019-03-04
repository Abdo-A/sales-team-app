import React from 'react';

import {
  ImageBackground, KeyboardAvoidingView, ScrollView, View,
} from 'react-native';
import PropTypes from 'prop-types';


const EnhancedView = ({ backgroundImageUrl, backgroundImagePath, children }) => (
  <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }} source={backgroundImageUrl ? { uri: backgroundImageUrl } : backgroundImagePath ? { backgroundImagePath } : null}>
    <KeyboardAvoidingView
      behavior="padding"
    >
      <ScrollView style={{ height: '100%' }} contentContainerStyle={{ width: '100%', minHeight: '100%' }}>
        <View style={{ height: '100%', width: '100%' }}>
          {children}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  </ImageBackground>
);

EnhancedView.defaultProps = {
  backgroundImageUrl: null,
  backgroundImagePath: null,
  children: null,
};

EnhancedView.propTypes = {
  backgroundImageUrl: PropTypes.string,
  backgroundImagePath: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default EnhancedView;