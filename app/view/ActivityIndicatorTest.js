/**
 * Created by harrishuang on 2017/7/12.
 */
import  React, {Component} from 'react'
import {View, Text, Alert, ActivityIndicator, Button, StyleSheet} from 'react-native'
import ComNavigator from '../view/ComNavigator'
const TimerMixin = require('react-timer-mixin');

/**
 * 个人认为这个玩意不好，加载框用原生的比较好
 */
export  default  class ActivityIndicatorTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animating: true,
        }
    }

    /**
     * 设置背景的设置方式呵呵呵fuck
     */
    render() {
        return (
            <View>
                <ComNavigator title="loading提示框" left="后退" onBack={() => this._onBackClick()}/>
                <Button title="开始计时器" onPress={() => this.setToggleTimeout()}/>
                <Button title="停止计时器" onPress={() => this._stopTimer()}/>
                <ActivityIndicator
                    animating={this.state.animating}
                    style={[styles.centering, {height: 80}]}
                    size="large"
                />
                <ActivityIndicator
                    style={[styles.centering]}
                />
                <ActivityIndicator
                    style={[styles.centering, {backgroundColor: '#eeeeee'}]}
                />
            </View>);
    }


    _stopTimer() {
        clearTimeout(this.timer);
    }

    /**
     * 递归循环发起一个计时器
     *
     */
    setToggleTimeout() {
        clearTimeout()


        this.timer = setTimeout(() => {
            this.setState({animating: !this.state.animating});
            this.setToggleTimeout();
        }, 2000);
    }

    _onBackClick() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
}

const styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    gray: {
        backgroundColor: '#cccccc',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
    },
});