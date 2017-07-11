/**
 * Created by harrishuang on 2017/7/9.
 */
import  React, {Component} from  'react'

import  {View,Text} from  'react-native'
import ComNavigator from  '../view/ImageTest'

export default  class ImageTest extends Component {


    render() {
        return (<View>
            <Text>DDDD</Text>
        </View>);
    }

    _onBackClick(){
        const {navigator} =this.props;
        if (navigator){
            navigator.pop();
        }
    }




}