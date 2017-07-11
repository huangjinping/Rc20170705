/**
 * Created by harrishuang on 2017/7/1.
 */
import  React, {Component} from  "react"

import {Text, View,Alert} from 'react-native'

export default  class DataTest extends Component {


    constructor(props) {
        super(props);
        this.state = {
            account: 'mm',
            password: 'mmm',
            verifyString: '获取验证码',
            isCounting: false,
        }
    }

    render() {
        return (<View>
            <Text  onPress={()=>this._onPasswordClick("title")}>dsds</Text>
            <Text >dsds</Text>
            <Text >dsds</Text>
            <Text >dsds</Text>
        </View>);
    }

    _onPasswordClick(title:title,msg:msg){
        Alert.alert(title,"dd");
    }



}