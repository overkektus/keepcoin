import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from 'native-base';

import Colors from '../variables/Colors';
import ErrorMessages from '../constants/errorMessages';

const Messages = ({ message, type }) => (
  <View style={{
    backgroungColor: (type == 'error') ? Colors.dangerColor : (type == 'success')
      ? Colors.successColor : Colors.infoColor,
    paddingVertical: 10,
    paddingHorizontal: 5,
  }}>
    <Text style={{ color: '#fff', textAlign: 'center' }}>{message}</Text>
  </View>
);

Messages.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['error', 'success', 'info']),
};

Messages.defaultProps = {
  message: ErrorMessages.default,
  type: 'error'
}

export default Messages;
