import React from 'react';
import { Header, Title, Body } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderAlbum = () => {
    return (     
    <Header>
        <Body>
          <Title><Icon name="album" size={30} />Albums</Title>
        </Body>
      </Header>
    );
};

export default HeaderAlbum;
