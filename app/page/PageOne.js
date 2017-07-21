/**
 * Created by harrishuang on 2017/7/6.
 */
import React, {Component} from  'react'
import {View, Text, StyleSheet, Alert, ListView, TouchableHighlight} from  'react-native'
import PageThree from  './PageThree'
import PageFour from  './PageFour'
import ListViewTest from '../view/ListViewTest'
import  ViewTest  from  '../page/ViewTest'
import DownLoad from  '../download/DownLoad'
import FlexboxTest from '../flexbox/FlexboxTest'
import Grammar from '../grammar/Grammar'
import StorageTest from  '../storage/StorageTest'

export default class PageOne extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var arr = [];
        arr[0] = {name: 'View集合', target: ViewTest}
        arr[1] = {name: '跳转到下一界面传值，并回调回来答案', target: PageFour}
        arr[2] = {name: '跳转到下一页面并传值', target: PageFour}
        arr[3] = {name: "网络上传下载等", target: DownLoad}
        arr[4] = {name: "布局", target: FlexboxTest}
        arr[5] = {name: "语法问题", target: Grammar}
        arr[6]={name:"本地缓存操作",target:StorageTest}

        this.state = {
            name: "跳转到下一页面并传值",
            arr,
            dataSource: ds.cloneWithRows(arr)
        }
    }

    /**
     *  <View style={PageOneStyle.tab_container}>
     <Text style={PageOneStyle.title} onPress={() => this._startIntent()}>跳转到下一界面传值，并回调回来答案</Text>
     <Text style={PageOneStyle.title} onPress={() => this._startAction()}>{this.state.name}</Text>
     <Text style={PageOneStyle.title} onPress={() => this._startListView()}>跳转到下ListView</Text>
     </View>
     */
    render() {
        return (

            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData, sectionId, rowId) => this._renderRowView(rowData, rowId)}
                />
            </View>
        );
    }

    /**
     * 数据渲染
     * @param rowData
     * @param rowId
     * @returns {XML}
     * @private
     */
    _renderRowView(rowData, rowId) {
        return (
            <TouchableHighlight onPress={() => {
                this._onItemClick(rowData, rowId);

            }}>
                <View style={PageOneStyle.tab_container}>
                    <Text style={PageOneStyle.title}>
                        {this.state.arr[rowId].name}
                    </Text>
                </View>
            </TouchableHighlight>

        )
    }

    /**
     *
     * @param rowData 基础化数据
     * @param rowId   获取id
     * @private
     */
    _onItemClick(rowData, rowId) {

        // Alert.alert("rowId"+rowData.name);
        const {navigator} = this.props;//从props 获取获取导航对象
        if (navigator) {
            navigator.push({
                name: rowData.name,
                component: rowData.target,
                params: {}
            });
        }
    }


    // /**
    //  *
    //  * @param rowData
    //  * @private
    //  */
    // _onItemClick(rowData, rowId) {
    //     Alert.alert("===>>>>>>!!" + rowId);
    //     const {navigator} = this.props;
    //     if(navigator){
    //         navigator.push({
    //             name: "listView",
    //             component: ListViewTest,
    //             params: {
    //
    //             }
    //         });
    //     }
    // }


    _startListView() {

        Alert.alert(this.state.arr[0].target + "");
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: "listView",
                component: ListViewTest,
                params: {}
            });
        }

    }


    /**
     * 传值下一页面并回调
     * @private
     */
    _startIntent() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: "ssd",
                component: PageFour,
                params: {
                    title: "选择界面",
                    rowData: "123",
                    rowId: "55",
                    getSelectedItem: function (selectedItem) {
                        Alert.alert("ddd");
                    }
                }
            });
        }

    }

    /**
     * 传值下一页面
     * @private
     */
    _startAction() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: "第三页",
                component: PageThree,
                params: {
                    rowData: "123",
                    rowId: "55"
                }
            });
        }
    }
}


const PageOneStyle = StyleSheet.create({

    tab_container: {
        marginTop: 10,
        flex: 1
    },

    title: {
        color: "#929292",
        fontSize: 8,
        padding: 10,
        backgroundColor: "#002344",
        marginTop: 5,
        fontWeight: 'bold',
        textAlign: 'center'
    },

});




























