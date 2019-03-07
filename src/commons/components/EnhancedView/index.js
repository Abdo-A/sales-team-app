import React from 'react';

import {
  ImageBackground, KeyboardAvoidingView, ScrollView, View,
} from 'react-native';
import PropTypes from 'prop-types';


const EnhancedView = ({
  style, backgroundImageUrl, backgroundImagePath, backgroundImageBlueRadius, children,
}) => (
  <ImageBackground
    style={{ width: '100%', height: '100%', flex: 1 }}
    blurRadius={backgroundImageBlueRadius}
    source={backgroundImageUrl ? { uri: backgroundImageUrl } : backgroundImagePath ? { backgroundImagePath } : null}
  >
    <KeyboardAvoidingView
      behavior="padding"
    >
      <ScrollView style={{ height: '100%' }} contentContainerStyle={{ width: '100%', minHeight: '100%' }}>
        <View style={[{ height: '100%', width: '100%' }, style]}>
          {children}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  </ImageBackground>
);

EnhancedView.defaultProps = {
  style: {},
  backgroundImageUrl: null,
  backgroundImagePath: null,
  backgroundImageBlueRadius: 0,
  children: null,
};

EnhancedView.propTypes = {
  style: PropTypes.shape({}),
  backgroundImageUrl: PropTypes.string,
  backgroundImagePath: PropTypes.string,
  backgroundImageBlueRadius: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default EnhancedView;
