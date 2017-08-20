import React from 'react';
import { Header, Title, Body } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AlbumHeader = (props) => {
    return (     
    <Header style={styles.headerStyles}>
        <Body>
          <Title style={styles.titleStyles}>
            <Icon name="album" size={20} />
            {props.headerText}
          </Title>
        </Body>
      </Header>
    );
};

const styles = {
  headerStyles: {
    /*backgroundColor: '#F8F8F8'*/
  },
  titleStyles: {
    fontSize: 20
  }
}

export default AlbumHeader;
