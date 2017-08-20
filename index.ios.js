import React from 'react';
import { AppRegistry } from 'react-native';
import { Container } from 'native-base';
import AlbumHeader from './src/components/album-header';
import AlbumList from './src/components/album-list';

const App = () => (
    <Container>
      <AlbumHeader headerText={'Albums'} />
      <AlbumList />
    </Container>
  );

AppRegistry.registerComponent('courseReactNative', () => App);
