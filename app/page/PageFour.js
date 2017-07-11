/**
 * Created by harrishuang on 2017/7/6.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Alert} from  'react-native'

export  default class PageFour extends Component {


    constructor(props) {
        super(props);


    }

    render() {
        return (
            <View Style={PageFourStyle.container}>
                <Text style={PageFourStyle.message} onPress={() => this._popNavigator()}>后退</Text>
                <Text style={PageFourStyle.message} onPress={() => this._onClick()}>接受的传值</Text>
                <Text style={PageFourStyle.message} onPress={() => this._popNavigatorAndCallBack()}>后退回调</Text>
            </View>
        );
    }

    /**
     * 弹出并回调
     * @private
     */
    _popNavigatorAndCallBack() {
        const {navigator} = this.props;
        if (this.props.getSelectedItem){
            this.props.getSelectedItem("1");
        }
        if (navigator){
            navigator.pop();
        }
    }


    /**
     * 弹出界面
     * @private
     */
    _popNavigator() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    _onClick() {
        Alert.alert(this.props.rowId, "从上一页面下发的传值" + this.props.rowData);
    }
}

const PageFourStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFCFF',
    },
    message: {
        textAlign: 'center',
        backgroundColor: "#5432",
        fontSize: 20,
        color: "#ff0000",
        padding: 10,
        margin: 10
    }
});