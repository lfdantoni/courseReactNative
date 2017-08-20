import React from 'react';
import { Text } from 'native-base';
import axios from 'axios';

class AlbumList extends React.Component {
    state = { albums: [] };
    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState(response.data));
    }
    render() {
        return (
            <Text>sdfsdfsd</Text>
        );
    }
}

export default AlbumList;
