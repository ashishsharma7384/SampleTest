import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './bottomTabBar/Home';
import Profile from './bottomTabBar/Profile';
import Search from './bottomTabBar/Setting';

const HomeStack = createStackNavigator();
const CompareStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SearchStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabBar = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen
        name="Setting"
        component={SettingStackScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabBar;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={Home} options={{
        title:'Overview',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={30} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        }} />
</HomeStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
    < ProfileStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#694fad',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            < ProfileStack.Screen name="My Profile" component={Profile} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={30} backgroundColor="#694fad" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </ ProfileStack.Navigator>
    );

    const SettingStackScreen = ({navigation}) => (
        <SearchStack.Navigator screenOptions={{
                headerStyle: {
                backgroundColor: '#d02860',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold'
                }
            }}>
                <SearchStack.Screen name="Setting" component={Search} options={{
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={30} backgroundColor="#d02860" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
                }} />
        </SearchStack.Navigator>
        );


  