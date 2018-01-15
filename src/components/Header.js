import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text, H1 } from 'native-base';
import Spacer from './Spacer';

const Header = ({ title }) => (
  <View>
    <Spacer size={25} />
      <H1>{title}</H1>
    <Spacer size={25} />
  </View>
);

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: 'Missing title'
};

export default Header;
