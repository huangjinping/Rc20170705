/**
 * Created by harrishuang on 2017/7/9.
 */
import  React, {Component} from  'react'

import  {Alert, View, Text, Image, StyleSheet} from  'react-native'
import ComNavigator from  '../view/ComNavigator'

var Dimensions = require('Dimensions');//获取尺寸对象
var {width} = Dimensions.get('window');//获取屏幕的宽
var {height} = Dimensions.get('window');//获取屏幕的高

export default  class ImageTest extends Component {

    render() {
        return (<View>
            <ComNavigator title="图片操作和介绍" left="后退" onBack={() => this._onBackClick()}/>
            <View style={ImageTestStyle.rootView}>
                <Image style={ImageTestStyle.icon} source={require('../imgs/avatar.png')}/>
                <Image onLoad={() => {
                }} style={ImageTestStyle.icon}
                       source={{url: 'https://pic.qiushibaike.com/system/pictures/11927/119273416/medium/app119273416.jpg'}}/>
            </View>

        </View>);
    }

    _onBackClick() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
}
/**
 * 设置Style
 */
const ImageTestStyle = StyleSheet.create({
        icon: {
            height: height / 3,
            width: width / 3,
            opacity: 1,
            borderRadius: 5,
            margin: 10,
        },
        rootView: {
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'center',

        }
    }
);