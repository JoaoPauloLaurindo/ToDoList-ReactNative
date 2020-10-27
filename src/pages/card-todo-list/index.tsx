import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Container, Title, SubTitle } from './styles';

const CardTodoList: React.FC = () => {
    return (
        <Container>
            <FontAwesome
                name='circle'
                color='blue' />

            <View>
                <Title>Presentes para o aniversário do João</Title>
                <SubTitle>Hoje, 14:00</SubTitle>
            </View>

            <FontAwesome
                name='star'
                color='gold' />
        </Container>
    );
}

export default CardTodoList;