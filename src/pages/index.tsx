import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native-gesture-handler';
import CardTodoList from './card-todo-list';

// import { Container } from './styles';

const Pages: React.FC = () => {
    return (
        <View>
            <StatusBar style='auto' />
            <FlatList
                data={[{ nome: 'neander' }, { nome: 'joão' }]}
                renderItem={({ item }) => (
                    <CardTodoList />
                )}
            />
        </View>
    )
}

export default Pages;