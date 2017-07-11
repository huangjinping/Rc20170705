/**
 * Created by harrishuang on 2017/7/6.
 */

import React, {Component} from 'react'
import {View, Text, ListView, Button, Alert, StyleSheet} from  'react-native'

var Dimensions = require('Dimensions');//获取尺寸对象
var {width} = Dimensions.get('window');//获取屏幕的宽
var {height} = Dimensions.get('window');//获取屏幕的高

export default class ListViewTest extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});//这是判断什么时候重新绘制，当r1与r2不相等的时候进行不一样
        var arr = [];//基础数据
        for (var index = 0; index < 100; index++) {
            arr[index] = index + "Test";
        }
        this.state = {
            ds,
            dataSource: ds.cloneWithRows(arr),//初始化数据与ios datasouce 一样效果。
        };
    }


    render() {
        return (
            <View>
                <Button title="更新数据" onPress={() => this._onUpdateView()}/>
                <Button title="后退" onPress={() => {
                    const {navigator} = this.props;
                    if (navigator) {
                        navigator.pop();
                    }
                }}/>

                <ListView
                    dataSource={this.state.dataSource}//给ListView 设置数据源
                    contentContainerStyle={ListViewTestStyle.contentContainerStyle}//给ListView内容style
                    renderRow={(rowData) => this.itemView(rowData, rowData)}//设置itemView
                />
            </View>
        );
    }


    /**
     * 数据更新
     * @private
     */
    _onUpdateView() {
        // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var arr = ["3", "v", "sd"];
        this.setState({
            dataSource: this.state.ds.cloneWithRows(arr),
        });
    }


    itemView(title, item) {
        return (<View style={ListViewTestStyle.itemViewStyle}>
            <Text style={ListViewTestStyle.item_header}>
                {title}
            </Text>
            <Text style={ListViewTestStyle.item}>
                {item}
            </Text>
        </View>);
    }

}


const ListViewTestStyle = StyleSheet.create({

    contentContainerStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    item_header: {
        backgroundColor: "#eeaaaa",
        color: "#000000",
        textAlign: 'center',
        padding: 10
    },
    item: {
        backgroundColor: "#eeffaa",
        color: "#000000",
        margin: 1,
        textAlign: 'center',
        padding: 10
    },
    itemViewStyle: {
        alignItems: 'center', //这里要注意，如果每个Item都在外层套了一个 Touchable的时候，一定要设置Touchable的宽高
        width: width / 2,
        height: 100
    }

});

