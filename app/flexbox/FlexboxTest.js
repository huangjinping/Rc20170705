/**
 * Created by harrishuang on 2017/7/12.
 */
import React, {Component} from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import ComNavigator from '../view/ComNavigator'

var itemWith = 100;
var itemHeight = 100;


/**
 * flexDirection 父控标签设置子标签的排列方向 row:横着排列，column:竖着排列
 * flexWrap 当子标签的长度大于父标签的长度的时候是否换行；no-warp：换行，warp：不换行
 * justifyContent :属性定义了项目在主轴上的对齐方式；center 居中排列；flex-start  开始排列；相当于grivy:top
 * flex-start 排列；flex-baseline:基准线对其，space-between:左右对齐，space-around:子标签的对齐方式相等
 * alignItems:父标签标记 当出现子标签的宽高不相等的时候；限制子标签的排列方式，flex-start:各个子标签的头对齐；flex-end:各个子标签的尾部对齐
 *center  各个子标签的中线对齐；banseline:对齐方式，stretch:当子标签的长度设置成auto 的时候就能实现长度沾满屏幕
 *alignContent:当子标签有多条轴线的时候；才能起到左右；（子标签的个数大于两个时候才能起到作用）
 *
 *
 *
 *2、flex-grow属性

 flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
 *.item { flex-grow: <number>; /* default 0
 *
 * 、flex-shrink

 flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
 负值对该属性无效。
 .item { flex-shrink: <number>; /* default 1



 align-self属性
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

.item { align-self: auto | flex-start | flex-end | center | baseline | stretch; }


 */



export default class FlexboxTest extends Component {
    render() {
        return (
            <View>
                <ComNavigator title="布局Flexbox" left="后退" onBack={() => this._onBackOnclick()}/>
                <ScrollView>
                    <Text>1</Text>
                    <View style={FlexboxTestStyle.item}>
                        <Text style={FlexboxTestStyle.viewItem1}>1</Text>
                        <Text style={FlexboxTestStyle.viewItem2}>2</Text>
                        <Text style={FlexboxTestStyle.viewItem3}>3</Text>
                        <Text style={FlexboxTestStyle.viewItem4}>4</Text>

                    </View>
                </ScrollView>
            </View>
        );
    }

    /**
     * 后退处理
     * @private
     */
    _onBackOnclick() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
}

const FlexboxTestStyle = StyleSheet.create({
    item: {
        width: 300,
        height: 500,
        backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
    },
    viewItem1: {
        width: itemWith,
        height: itemHeight,
        backgroundColor: '#00cccc',
        color: 'white',
        fontSize: 30,
        lineHeight: 50,
        textAlign: 'center',
        margin: 2,
        flexShrink: 0,


    },
    viewItem2: {
        width: 100,
        height: itemHeight,
        backgroundColor: '#00cccc',
        color: 'white',
        fontSize: 30,
        lineHeight: 50,
        textAlign: 'center',
        margin: 2,
        flexShrink: 1,


    },
    viewItem3: {
        width: 100,
        height: itemHeight,
        backgroundColor: '#00cccc',
        color: 'white',
        fontSize: 30,
        alignSelf: "flex-end",
        lineHeight: 50,
        textAlign: 'center',
        margin: 2,
        flexShrink: 1,

    },
    viewItem4: {
        width: itemWith,
        height: 'auto',
        backgroundColor: '#00cccc',
        color: 'white',
        fontSize: 30,
        lineHeight: 50,
        textAlign: 'center',
        margin: 2,
        flexShrink: 1,

    }
});