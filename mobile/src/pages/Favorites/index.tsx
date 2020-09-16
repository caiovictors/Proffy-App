import {View} from 'react-native'
import React, { useState } from 'react'
import {useFocusEffect} from '@react-navigation/native'

import styles from './styles'
import PageHeader from '../../components/PageHeader'
import { ScrollView } from 'react-native-gesture-handler'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import AsyncStorage from '@react-native-community/async-storage'

function Favorites() {
    const [favorites, setFavorites] = useState([])

    function loadFavorites () {
        AsyncStorage.getItem('favorites').then(response => {
            if(response) {
                const favoritedTeachers = JSON.parse(response)
                
                setFavorites(favoritedTeachers)
            }
        })
    }

    useFocusEffect(
        React.useCallback(() => {
            loadFavorites()
        }, [])
    )

    return (
        <View  style={styles.container}>
            <PageHeader title="Meus Proffys favoritos:"/>

            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }}>
                {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited
                        />
                    )
                })}
            </ScrollView>
        
        </View>
    )
}

export default Favorites