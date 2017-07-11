/**
 * Created by harrishuang on 2017/7/6.
 */

import React, {Component} from  'react'
import  {View, Text, StyleSheet,Alert} from 'react-native'
import  ComNavigator from  '../view/ComNavigator'

export default class PageTwo extends Component {

    render() {
        return (
            <View>
                <ComNavigator  onBack={()=>this._onBackClick()} title="首页" left="" right="" />
                <Text style={PageTwoStyle.title}>dsds</Text>
            </View>
        );
    }


}
const PageTwoStyle = StyleSheet.create({
    title: {
        backgroundColor: "#002344",
        color: "#cccccc",
        textAlign: 'center',
        marginTop: 200,
        padding: 10
    }
});
