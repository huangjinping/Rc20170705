/**
 * Created by harrishuang on 2017/7/12.
 */
import React, {Component} from  'react'
import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native'
import ComNavigator from  '../view/ComNavigator'

export  default  class TextInputTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "这是个测量"
        }
    }

    render() {
        return (
            <View>
                <ComNavigator title="输入框操作" left="后退" onBack={() => this._onBack()}/>
                <View >
                    <View >
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: 'gray',
                                borderWidth: 1,
                                margin: 5,
                                padding: 5
                            }}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />
                    </View>
                    <View >
                        <Button title="提交" onPress={() => this._onSubmit()}/>
                    </View>
                </View>
            </View>

        );
    }


    /**
     * 提交数据
     * @private
     */
    _onSubmit() {
        Alert.alert(this.state.text);
    }

    /**
     * 后退
     * @private
     */
    _onBack() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
}


