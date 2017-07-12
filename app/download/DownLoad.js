/**
 * Created by harrishuang on 2017/7/5.
 */

import React, {Component} from "react";
import {View, Text, Button, Alert, Platform,ActivityIndicator} from 'react-native'

import FileTransfer  from '@remobile/react-native-file-transfer'
import ComNavigator from '../view/ComNavigator'


export default class DownLoad extends Component {
    render() {
        return (
            <View>
                <ComNavigator left="后退" title="上传下载" onBack={() => this._onBackClick()}/>
                <Button title="文件的下载框架FileTransfer" onPress={() => this._onClickPress()}/>
                <Button title="发红包的按钮post" onPress={() => this._onSendRedPackage()}/>
                <Button title="get请求" onPress={() => this._onGet()}/>


            </View>
        );
    }

    /**
     *
     *Body传入参数，注意！注意！注意！重要的事情说三次，只能传啊a=1&b=2...这种参数形式，不可传对象{a:1,b:2,...},用JSON.stringify({a:1,b:2,...})也不行。在jquery中，传入对象框架会自动封装成formData的形式，fetch没有这个功能。
     * 这是post 带参数的使用
     * 重要！重要！重要！主要的事情说三遍参数的body 传输需要用的是&
     *发红包
     * @private
     */
    _onSendRedPackage() {
        const url = 'http://182.92.6.16:8081/hd-merchant-biz-app/app/sendRedPackageTest';
        // const url='http://182.92.6.16:8081/hd-merchant-biz-app/app/login';
        fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "id=6283864319330354177&remark='you had a red package'&redPacketAmt=0.31"
        })
            .then((response) => response.json())
            .then(
                (responseJson) => {
                    var users = responseJson;
                    Alert.alert(users.message);
                }
            )
            .catch((error) => {
                Alert.alert("eirr");
            })
    }


    /**
     * 界面后退
     * @private
     */
    _onBackClick() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    /**
     /**
     *开始下载数据问题
     * @private
     */
    _onClickPress() {


        Alert.alert('开始下载', 'sss', [{text: "开始下载", onPress: () => this.testDownload()}]);


        // Alert.alert(
        //     'Alert Title',
        //     'My Alert Msg',
        //     [
        //         {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        //         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        //         {text: 'OK', onPress: () => console.log('OK Pressed')},
        //     ],
        //     {cancelable: false}
        // )
    }

    testDownload() {

        var fileTransfer = new FileTransfer();
        var uri = encodeURI("https://www.hdfex.com/appstore/app-hdrelease-fenfujun-shangjiaduan.apk");
        fileTransfer.onprogress = (progress) => console.log("1", progress.loaded + '/' + progress.total);
        fileTransfer.download(
            uri,
            Platform.isandroid ? '/sdcard/data/xx.html' : '/Users/fang/oldwork/client/server/xx.zip',
            function (result) {
                console.log("下载成功");
                console.log(result);
            },
            function (error) {
                console.log("下载失败");
                console.log(error);
            },
            true
        );

    }

    /**
     *
     * 要是ios 访问不通别忘记那个https 限制的plist 设置就可以
     * 1、在Info.plist中的App Transport Security Settings中添加Allow Arbitrary Loads，类型为Boolean，值为yes
     * 最原始的get请求
     * @private
     */
    _onGet() {
        const url = "http://www.hdfex.cn/hd-merchant-web/mobile/release?appName=fenfujun-shangjiaduan";

        // const url = 'https://api.github.com/users/mralexgray/repos';
        fetch(url,{
            method:"GET",
            headers : {
                'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;',
                'Content-Type' : 'text/plain;charset=UTF-8',
                'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36',
                'Host' : 'domain.xx.com',
            }
        })
            .then((response)=>response.json())
            .then(
                (responseJson)=> {
                    Alert.alert("success");
                }
            )
            .catch((error)=>{
            Alert.alert("eirr"+error.toString());
            })
    }
}