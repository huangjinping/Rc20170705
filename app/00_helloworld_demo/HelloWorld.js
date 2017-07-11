import React, {Component} from 'react';
import {Text,Alert,View,Image,StyleSheet} from 'react-native';

/**
 * Created by marno on 2017/1/13.
 * Desc:HelloWorld 你好，世界！
 */
export  default class HelloWorld extends Component {


    constructor(props) {
        super(props)
        this.state={
            user:null,
            msg:'messagedeault',
        }
        this.msg="122";

    }

    render() {
     let  item=this.state.user;
     let  temp=this.state;
        if(item){
            return  (
            <View>
                <Image  style={HelloWorldStyle.image_UserAvatar}  source={{uri:item.avatar_url}}/>
                <Text onPress={()=>this.fetchUserList()}>{item.id}</Text>
                <Text >{item.type}</Text>
                <Text >{item.type}</Text>
                <Text >{item.type}</Text>
                <Text>{this.msg}</Text>
            </View>
            );
        }else {
            return (<Text onPress={()=>this.fetchUserList()}>Hello Wolrd!!</Text>)
        }
    }


    renderItem(item){
        Alert.alert("title","确认");
    }

    //发起网络请求，获取数据
    fetchUserList() {
        const url = 'https://api.github.com/users/mralexgray/repos';
        fetch(url)
            .then((response)=>response.json())
            .then(
                (responseJson)=> {
                    var users = responseJson;
                    var firstUser = users[0].owner;
                    console.log(firstUser);
                    this.msg="dddd";
                    this.setState({
                        user: firstUser,
                    })
                }
            )
            .catch((error)=>console.error(error))
    }






    _showAlert(title:title){
        Alert.alert(title,'确定退出吗?')
    }

}

const HelloWorldStyle= StyleSheet.create({
    image_UserAvatar: {
        borderRadius: 80,
        width: 300,
        height: 300,
        resizeMode: "cover",
        marginHorizontal: 12
    },

});

