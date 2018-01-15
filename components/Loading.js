import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Colors from '../variables/Colors';

const About = () => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
    <ActivityIndicator size='large' color={Colors.accentColor}/>
  </View>
);

export default About;