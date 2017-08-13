import React from 'react';
import { Text } from 'react-native';

const Header = () => {
    const { textStyles } = styles;
    return <Text style={textStyles}> Albums </Text>;
};

const styles = {
    textStyles: {
        fontSize: 20
    }
};

export default Header;
