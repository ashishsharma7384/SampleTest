import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
} from 'react-native';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }

    }

    render() {
        console.disableYellowBox = true;
        return (
            <View style={styles.container} >
                <StatusBar hidden />
            
            <Text style={styles.main_text}>Home Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main_text:{

        fontSize:25,
        color:'#009387'
        ,fontWeight:'bold'
    }
});