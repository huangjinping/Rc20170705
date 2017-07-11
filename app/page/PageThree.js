/**
 * Created by harrishuang on 2017/7/6.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Alert} from  'react-native'

export  default class PageThree extends Component {


    constructor(props) {
        super(props);


    }

    render() {
        return (
            <View Style={PageThreeStyle.container}>
                <Text>pageThree</Text>
                <Text>pageThree</Text>
                <Text>pageThree</Text>
                <Text>pageThree</Text>
                <Text>pageThree</Text>
                <Text >pageThree</Text>
                <Text>pageThree</Text>
                <Text>pageThree</Text>
                <Text>pageThree</Text>
                <Text style={PageThreeStyle.message} onPress={()=>this._popNavigator()}>后退</Text>
                <Text  style={PageThreeStyle.message} onPress={()=> this._onClick()}>pageThree</Text>
            </View>
        );
    }


    /**
     * 弹出界面
     * @private
     */
    _popNavigator(){
        const  {navigator} = this.props;
        if(navigator){
            navigator.pop();
        }
    }

    _onClick() {
        Alert.alert(this.props.rowId, "从上一页面下发的传值"+this.props.rowData);
    }
}

const PageThreeStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFCFF',
    },
    message: {
        textAlign: 'center',
        backgroundColor:"#5432",
        fontSize: 20,
        color:"#ff0000",
        padding: 10,
        margin: 10
    }
});