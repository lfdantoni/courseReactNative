import React from 'react';
import { AppRegistry } from 'react-native';
import { Container } from 'native-base';
import HeaderAlbum from './src/components/header-album';

const App = () => (
    <Container>
      <HeaderAlbum />
    </Container>
  );

AppRegistry.registerComponent('courseReactNative', () => App);
