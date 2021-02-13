import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Platform,
    ScrollView,
    Dimensions,
    KeyboardAvoidingView
} from 'react-native';
import colors from '../../utility/colors';
export default class Setting extends Component {

    constructor() {
        super();
        this.state = {
            add_text: false,
            textListArray:[]
        }
    }

   AddText=()=>{

    if(this.state.add_text!==''){

      this.setState(prevState => ({
        textListArray: [this.state.add_text, ...prevState.textListArray],
        add_text:''
      }))
    }
   }

    render() {
        return (
          <KeyboardAvoidingView style={styles.background}
          behavior={"height"}
          keyboardVerticalOffset={10}
          enabled={Platform.OS === "ios" ? true : true}>
                    <View style={{flex:1,alignItems: 'flex-start' ,backgroundColor:'white',marginBottom:10}}>
                    <ScrollView style={{width:'100%'}} showsHorizontalScrollIndicator={false}>
                    {this.state.textListArray.map((item,index) => {
                    return (
                      <View style={{flexDirection:'row',flex:1,margin:10}}>
                      <Text style={{fontSize:16,}}>{index+1+': '}</Text>
                      <Text style={{fontWeight:'bold',fontSize:16,}}>{item}</Text>
                      </View>
                    )})}
                    </ScrollView>
                    </View>

                    <View style={[styles.inputTextStyle,]}>
                                <TextInput style={styles.inputBox}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="Add Text"
                                    placeholderTextColor='#384055'
                                    keyboardType='email-address'
                                    value={this.state.add_text}
                                    onChangeText={(add_text) => this.setState({ add_text })}
                                />
                        </View>

                        <View style={{backgroundColor: colors.bg_clr,width:'100%',padding:20 }}>
                            <TouchableHighlight style={[styles.button, { backgroundColor: colors.red_clr, }]} activeOpacity={0.8} underlayColor={'#E2622D'} onPress={() => this.AddText()}>
                                <Text style={styles.buttontxt}>Add Text</Text>
                            </TouchableHighlight>
                        </View>
                {/* </ScrollView> */}
                </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.bg_clr,
        flex: 1,
    },
    headertxt: {
        color: colors.txt_clr,
        textAlign: 'center',
        fontSize: 16,
        paddingRight: 42,
        fontWeight: 'bold'
    },
    logo: {
        height: 60,
        width: Dimensions.get('window').width-40,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinnerTextStyle: {
        color: colors.white_clr
    },
    inputTextStyle: {
        flexDirection: 'row',
        borderColor: colors.black_clr,
        borderRadius: 2,
        paddingHorizontal:10,
        marginHorizontal:20,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white_clr,

    },
    inputBox: {
        height: 50,
        color: colors.txt_clr,
        fontSize: 14,
        textAlign: 'center'
    },

    modal_header: {
        backgroundColor: colors.white_clr,
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%'
    },

    button: {
        height: 55,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        width: '100%',
    },
    buttontxt: {
        fontSize: 20,
        color: colors.white_clr,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    forgView: {
        justifyContent: 'center',
    },
    forgottxt: {
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
});