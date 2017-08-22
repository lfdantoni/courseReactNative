import React from 'react';
import { Image, Linking } from 'react-native';
import { Card, CardItem, Content, Container,
        Thumbnail, Text, Button, Left, Body } from 'native-base';

export default class AlbumDetail extends React.Component {
    shopClick() {
        //console.log(this.props);
        Linking.openURL(this.props.album.url);
    }
    render() {
        return (
            <Card>
                <CardItem>
                <Left>
                    <Thumbnail source={{ uri: this.props.album.thumbnail_image }} />
                    <Body>
                    <Text>{this.props.album.title}</Text>
                    <Text note>{this.props.album.artist}</Text>
                    </Body>
                </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image 
                        source={{ uri: this.props.album.image }} 
                        style={styles.imageStyle} 
                    />
                </CardItem>
                <CardItem>
                    <Container style={styles.footerConteinerStyle}>
                        <Content >
                            <Button 
                                bordered 
                                style={styles.ftBottonStyle}
                                onPress={() => this.shopClick()}
                            >
                                <Text style={styles.txtBottonStyle}>Shop</Text>
                            </Button>
                        </Content>
                    </Container>
                </CardItem>
            </Card>
        );
    }
}

const styles = {
    imageStyle: {
        height: 300, 
        width: null, 
        flex: 1
    },
    footerConteinerStyle: {
        height: 50
    },
    ftBottonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    txtBottonStyle: {
        alignSelf: 'center'
    }
};
