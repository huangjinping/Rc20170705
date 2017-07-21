/**
 * Created by harrishuang on 2017/7/18.
 */
import React, {Component} from 'react'
import {View, Text, Button, Alert, StyleSheet} from 'react-native'
import ComNavigator from  '../view/ComNavigator'
import {foo, user, firstName, lastName as surname, year, first_Name, last_name, age} from  './UserManager';
import * as Utils from  './Utils';
import  ImportUtils  from './ImportUtils';
import DimensUtil from  '../utils/DimensUtil';
import  _ from  './ImTest';




// 上面代码的两组写法，第一组是使用export default时，
// 对应的import语句不需要使用大括号；
// 第二组是不使用export default时，对应的import语句需要使用大括号。



export default class Grammar extends Component {
    render() {

        return (
            <View>
                <ComNavigator title="语法问题" left="后退" onBack={() => this._onBack()}/>
                <Text style={GrammnerStyle.message} onPress={() => this._showAlert()}>单个导入</Text>
                <Text style={GrammnerStyle.message} onPress={() => this._showExport()}>全部导入</Text>
                <Text style={GrammnerStyle.message} onPress={() => this._showUtils()}>ImportUtils</Text>
                <Text style={GrammnerStyle.message} onPress={() => this._amTest()}>默认导入</Text>
                <Text style={GrammnerStyle.message} onPress={()=>this._onShowDimensUtils()}>获取屏幕大小</Text>
            </View>
        );
    }

    _onShowDimensUtils(){
        Alert.alert("屏幕宽度"+DimensUtil.getScreenWidth()+"屏幕长度："+DimensUtil.getScreenHeight());
    }

    _amTest(){
        Alert.alert("d");
    }


    _showUtils() {
        Alert.alert(ImportUtils());
    }

    _showAlert() {
        var a = user();
        Alert.alert(foo + "===" + a + "" + surname + "===" + firstName + "===" + year + "===>>" + first_Name + "===" + last_name + "======" + age);
    }

    _showExport() {
        Alert.alert(Utils.name);


    }

    _onBack() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
}


const GrammnerStyle = StyleSheet.create({
    buttonStyle: {
        marginTop: 100,
        backgroundColor: '#FFFCFF',
        color: "#ff0000",

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
