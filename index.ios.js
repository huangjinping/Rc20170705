/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';


import Blink from './app/data/Blink'
import DownLoad from './app/download/DownLoad'

import MainPage from  './app/page/MainPage'





import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    NavigatorIOS,
    Alert,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'


export default class rc20170705 extends Component {

    render() {
        let defaultName = 'FirstPageComponent';
        let defaultComponent = MainPage;
        return (
            <Navigator

                initialRoute={{
                    name: defaultName,
                    component: defaultComponent}}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.FloatFromBottom;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    //这个语法是把 routes.params 里的每个key作为props的一个属性，在下个页面即可用this. props.id调用
                    //navigator对象在导航容器跳转时一直存在
                    return <Component {...route.params} navigator={navigator}/>
                }}

            />
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        padding: 15,
    },
    containView: {
        flex: 1,
        justifyContent: 'center',
    },
    detailContainView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    blackText: {
        fontSize: 20,
        textAlign: 'center',
    },
});

AppRegistry.registerComponent('rc20170705', () => rc20170705);
