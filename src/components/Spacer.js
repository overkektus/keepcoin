import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const Spacer = ({ size }) => (
  <View style={{ flex: 1, height: size }} />
);

Spacer.PropTypes = {
  size: PropTypes.number
};

Spacer.defaultProps = {
  size: 20,
};

export default Spacer;