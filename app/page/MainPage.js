/**
 * Created by harrishuang on 2017/7/6.
 */
import React, {Component} from 'react'
import {View, Text, Image, StyleSheet} from  'react-native'
import TabNavigator from 'react-native-tab-navigator'

import PageOne from './PageOne'
import PageTwo from './PageTwo'

const SELECTED_TAG = 'selected';
const SELECTED_TITLE = '精选';
const SELECTED_NORMAL = require('../imgs/ic_tab_strip_icon_feed.png');
const SELECTED_FOCUS = require('../imgs/ic_tab_strip_icon_feed_selected.png');

const EXPLORE_TAG = 'explore';
const EXPLORE_TITLE = '发现';
const EXPLORE_NORMAL = require('../imgs/ic_tab_strip_icon_category.png');
const EXPLORE_FOCUS = require('../imgs/ic_tab_strip_icon_category_selected.png');

export default  class MainPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectTab: SELECTED_TAG
        }
    }

    render() {
        return (
            <TabNavigator
                tabBarStyle={MainPageStyle.tab_container}
                tabBarShadowStyle={{height: 0}}>
                {this._renderTabItem(SELECTED_TAG, SELECTED_TITLE, SELECTED_NORMAL, SELECTED_FOCUS)}
                {this._renderTabItem(EXPLORE_TAG, EXPLORE_TITLE, EXPLORE_NORMAL, EXPLORE_FOCUS)}
            </TabNavigator>

        );
    }

    _renderTabItem(tag, title, iconNormal, iconFocus) {
        return (

                <TabNavigator.Item
                    selected={this.state.selectedTab === tag}
                    title={title}
                    titleStyle={MainPageStyle.tab_title}
                    selectedTitleStyle={MainPageStyle.tab_title_selected}
                    renderIcon={() => <Image source={iconNormal} style={MainPageStyle.tab_icon}/>}
                    renderSelectedIcon={() => <Image source={iconFocus} style={MainPageStyle.tab_icon}/>}
                    onPress={() => this.setState({selectedTab: tag})}>
                    {this._createContentPage(tag)}
                </TabNavigator.Item>

        )
    }

    /**
     * 渲染tab对应的内容页面
     * @param tag
     * @returns {XML}
     * @private
     */
    _createContentPage(tag) {
        switch (tag) {
            case SELECTED_TAG:
                return (<PageOne {...this.props}/>);
            case EXPLORE_TAG:
                return (<PageTwo {...this.props}/>);

        }
    }

}

const MainPageStyle = StyleSheet.create({
    tab_container: {
        height: 42,

    },
    tab_icon: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
    },
    tab_title: {
        color: "#929292",
        fontSize: 8,
    },
    tab_title_selected: {
        color: "#333333",
        fontSize: 8,
    }
})