/**
 * Created by harrishuang on 2017/7/21.
 */
import  React, {Component} from  'react'
import  {View, Text} from  'react-native'
import ComNavigator from '../view/ComNavigator'

export  default class StorageTest extends Component {


    render() {
        return (

            <View>
                <ComNavigator title="本地缓存数据"  left="后退"   onBack={() => this._onBack()}/>
                <Text>
                    本地缓存
                </Text>
            </View>);
    }

    _onBack() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

}