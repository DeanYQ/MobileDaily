/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Alert
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'

const onButtonPress = () => {
   //Alert.alert('Button has been pressed!');

   //let response = await fetch('http://192.168.1.105:8088/api/getuser?name=dean');
   fetch('http://192.168.1.105:8088/api/getuser?name=dean')
    .then((response)=>{
        if(response.ok){
            return response.text();
        }
    })
    .then((responseText)=>{
        Alert.alert(responseText);
    })
    .done();
};

export default class MobileDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Event'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Event'}
                        title="Event"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        onPress={() => this.setState({ selectedTab: 'Event' })}>
                        <View style={styles.page0}>
                            <Button
                              onPress={onButtonPress}
                              title="Press Purple"
                              color="#841584"
                              accessibilityLabel="Learn more about purple"
                            />
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Log'}
                        title="Log"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        onPress={() => this.setState({ selectedTab: 'Log' })}>
                        <View style={styles.page0}>
                            <Text style={{fontSize:18,padding:15,color: 'blue'}}>This is Log Page</Text>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Device'}
                        title="Device"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        onPress={() => this.setState({ selectedTab: 'Device' })}>
                        <View style={styles.page1}>
                            <Text style={{fontSize:18,padding:15,color: '#fff'}}>This is Device Page</Text>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'User'}
                        title="User"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        onPress={() => this.setState({ selectedTab: 'User' })}>
                        <View style={styles.page1}>
                            <Text style={{fontSize:18,padding:15,color: '#fff'}}>This is User Page</Text>
                        </View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        fontSize: 10,
        color: 'black'
    },
    selectedTabText: {
        fontSize: 10,
        color: 'red'
    },
    icon: {
        width: 22,
        height: 22
    },
    page0: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    page1: {
        flex: 1,
        backgroundColor: 'blue'
    }
});

AppRegistry.registerComponent('MobileDemo', () => MobileDemo);
