/**
 * Created by harrishuang on 2017/7/1.
 */
import React, {Component} from 'react';
import {Text, View,Alert} from 'react-native'


export default class Blink extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showText: true,
            userName:"ddd1===ddd=>>>232",
        };

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 1000);
    }

    // getInitialState(){
    //     this.state.userName="getInitialState"
    // }




    render() {

        // 根据当前showText的值决定是否显示text内容
        // let display = this.state.showText ? this.props.text : ' ';
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';

        return (<View>
            <Text >dsds{this.state.userName}</Text>
            <Text >dsds{display}</Text>
            <Text  >{this.state.userName}ccc</Text>
        </View>);


    }


}