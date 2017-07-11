/**
 * Created by harrishuang on 2017/7/11.
 */
import  React, {Component} from 'react'
import {View, Text, ListView, StyleSheet, TouchableHighlight, Alert} from 'react-native'
import ListViewTest from  '../view/ListViewTest'
import ComNavigator from  '../view/ComNavigator'
import ImageTest from  '../view/ImageTest'


export  default class ViewTest extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});//这是判断什么时候重新绘制，当r1与r2不相等的时候进行不一样
        var arr = [];
        arr[0] = {name: "ListView", target: ListViewTest};
        arr[1]={name:"ImageView",target:ImageTest}
        this.state = {
            dataSource: ds.cloneWithRows(arr)
        }
    }

    render() {
        return (
            <View>
                <ComNavigator title="View" left="后退" onBack={()=>this._onBack()}/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData, sectionId, rowId) => this._renderItem(rowData, rowId)}
                />
            </View>
        );
    }

    /**
     * 渲染item数据问题
     * @returns {XML}
     * @private
     */
    _renderItem(rowData, rowId) {
        return (
            <TouchableHighlight onPress={() => {
                this._onItemClick(rowData, rowId);
            }}>
                <View>
                    <Text style={ViewTestStyle.itemText}>{rowData.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    /**
     * 条目掉级
     * @private
     */
    _onItemClick(rowData, rowId) {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                    name: rowData.name,
                    component: rowData.target,
                    params: {}
                }
            );
        }
    }

    /**
     *后退
     * @private
     */
    _onBack() {
        var {navigator} = this.props;
        if (navigator) {
            navigator.pop();//弹出数据问题
        }
    }
}

/**

 */
const
    ViewTestStyle = StyleSheet.create({
        title: {
            color: "#000000",
            fontSize: 12,
            padding: 10,
            marginTop: 20,
            textAlign: 'center'
        },
        itemText: {
            color: "#3aa0ff",
            textAlign: 'left',
            fontSize: 20
        }
    });

