import React, { Component } from 'react';
import {View, StyleSheet, StatusBar, Image, Text, Dimensions} from 'react-native';

export default class Splash extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('DashboardScreen');
        }, 2000);
    }

    render() {
        return (
            <View style={styles.background} >
                <StatusBar hidden={true} />
                <Text style={styles.main_txt}>Foreignerds</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
    main_txt: {
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 1,
        color:'red',
        textAlign: 'center',
    },
});