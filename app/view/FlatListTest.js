/**
 * Created by harrishuang on 2017/7/12.
 */
import React, {Component} from 'react'
import {View, Text, FlatList} from  'react-native'
import ComNavigator from  '../view/ComNavigator'

export default class FlatListTest extends Component {

    constructor(props) {
        super(props);
        var arr = [];
        for (var i = 0; i < 20; i++) {
            arr[i] = {
                key: i + "==>" + i
            }
        }
        this.state = {
            arr
        }
    }

    render() {
        return (
            <View>
                <ComNavigator title="简单列表控件" left="后退" onBack={() => this._onBackClick()}/>
                <FlatList
                    data={this.state.arr}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />
                <Text>dddd</Text>
            </View>
        );
    }

    /**
     * 后退监听
     * @private
     */
    _onBackClick() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
}