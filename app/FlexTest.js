import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import  ToastUtils from  "./utils/ToastUtil"
/**
 * Created by marno on 2017/1/13.
 * 简单的Flex布局，主要是熟悉Flex布局的各类属性
 */
export default class FlexTest extends Component {
    render() {
        return (
            <View style={FlexTestStyle.container}>
                <Text onPress={() => this._onCloseClick()} style={FlexTestStyle.item}>1</Text>
                <Text style={FlexTestStyle.item}>2</Text>
                <Text style={FlexTestStyle.item}>3</Text>
                <Text style={FlexTestStyle.item_flex_end}>55</Text>
                <Text style={FlexTestStyle.item_flex_end}>52</Text>
                <Text style={FlexTestStyle.item_center}>34</Text>
            </View>
        )
    }

    //点击关闭页面
    _onCloseClick() {
        ToastUtils.show("点击Toast.show")
    }
}

const FlexTestStyle = StyleSheet.create({
    container: {
        backgroundColor: "#0ff",
        flexDirection:"row-reverse",
        flex: 1,
    },
    item_center: {
        backgroundColor: "#00ff00",
        flexGrow: 2,
    },
    item: {
        backgroundColor: "#f0f",
        flexGrow: 1,//相当于Android控件中的weight属性
        margin: 4,
        height: 100,
    },
    item_flex_end: {
        backgroundColor: "#f0f",
        flexGrow: 1,//相当于Android控件中的weight属性
        margin: 4,
        height: 100,
        alignSelf: "flex-end",
    }
})