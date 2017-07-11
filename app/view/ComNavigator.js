/**
 * Created by harrishuang on 2017/7/11.
 */
import  React, {Component} from  'react'
import  {View, Text, StyleSheet} from  'react-native'

export default  class ComNavigator extends Component {


    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={ComNavigatorStyle.viewContent}>
                <View>
                    <Text   onPress={() => this._onBackClick()} style={ComNavigatorStyle.left}>{this.props.left}</Text>
                </View>
                <Text style={ComNavigatorStyle.title}>{this.props.title}
                </Text>
                <View>
                    <Text style={ComNavigatorStyle.right}>{this.props.right}</Text>
                </View>
            </View>
        );
    }

    /**
     * 后退按钮
     * @private
     */
    _onBackClick() {
        this.props.onBack();
    }
}


const ComNavigatorStyle = StyleSheet.create({
    viewContent: {
        backgroundColor: '#3492E9',
        marginTop: 20,
        height: 49,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingRight: 5
    },
    left: {
        color: '#ffffff',
        fontSize: 15,
        textAlign: 'center'
    },
    title: {
        color: "#ffffff",
        fontSize: 25,
        textAlign: 'center'
    }, right: {
        color: '#ffffff',
        fontSize: 15,
        textAlign: 'center'
    }
});






























