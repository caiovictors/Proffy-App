import {View} from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TeacherList from '../pages/TeacherList'
import Favorites from '../pages/Favorites'
import { Archivo_700Bold } from '@expo-google-fonts/archivo'
import {Ionicons} from '@expo/vector-icons'

const {Navigator, Screen} = createBottomTabNavigator()

function StudyTabs() {
    return (
        <Navigator tabBarOptions={{
            style: {
                elevation: 0,
                shadowOpacity: 0,
                height: 64,
            },
            tabStyle: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            },
            iconStyle: {
                flex: 0,
                width: 20,
                height: 20,
            },
            labelStyle: {
                fontFamily: 'Archivo_700Bold',
                fontSize: 13,
                marginLeft: 16,
            },
            inactiveBackgroundColor: '#fafafc',
            activeBackgroundColor: '#ebebf5',
            inactiveTintColor: '#32264d'
        }}>
            <Screen 
                name="TeacherList" 
                component={TeacherList} 
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <Ionicons name="ios-easel" size={size} color={focused ? '#8257E5' : color}/>
                        )
                    }
                }}
            />
            <Screen 
                name="Favorites" 
                component={Favorites}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <Ionicons name="ios-heart" size={size} color={focused ? '#8257E5' : color}/>
                        )
                    }
                }} 
            />
        </Navigator>
    )
}

export default StudyTabs