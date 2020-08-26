import React from 'react';

import { Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, SearchButton, Inputt, Form, User, Name, Bio } from './styles';

export default function List({ navigation }) {
  return (
    <ScrollView>
      <Container>
        <Form>
          <Inputt
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            returnKeyType="send"
          />
          <SearchButton>
            <Icon name="search" size={20} color="#FFF" />
          </SearchButton>
        </Form>
        <TouchableOpacity onPress={() => { navigation.navigate('Detail') }}>
          <User>
            <Name>Leandro Cesar Marques dos Santos</Name>
            <Bio>Situação: Liberado</Bio>
            <Bio>Data: 17/08/2020</Bio>
          </User>
        </TouchableOpacity>

        <User>
          <Name>Leandro Cesar Marques dos Santos</Name>
          <Bio>Situação: Liberado</Bio>
          <Bio>Data: 17/08/2020</Bio>
        </User>

        <User>
          <Name>Leandro Cesar Marques dos Santos</Name>
          <Bio>Situação: Liberado</Bio>
          <Bio>Data: 17/08/2020</Bio>
        </User>

        <User>
          <Name>Leandro Cesar Marques dos Santos</Name>
          <Bio>Situação: Liberado</Bio>
          <Bio>Data: 17/08/2020</Bio>
        </User>

        <User>
          <Name>Leandro Cesar Marques dos Santos</Name>
          <Bio>Situação: Liberado</Bio>
          <Bio>Data: 17/08/2020</Bio>
        </User>
        <User>
          <Name>Leandro Cesar Marques dos Santos</Name>
          <Bio>Situação: Liberado</Bio>
          <Bio>Data: 17/08/2020</Bio>
        </User>
        <User>
          <Name>Leandro Cesar Marques dos Santos</Name>
          <Bio>Situação: Liberado</Bio>
          <Bio>Data: 17/08/2020</Bio>
        </User>
        <User>
          <Name>Leandro Cesar Marques dos Santos</Name>
          <Bio>Situação: Liberado</Bio>
          <Bio>Data: 17/08/2020</Bio>
        </User>
        <User>
          <Name>Leandro Cesar Marques dos Santos</Name>
          <Bio>Situação: Liberado</Bio>
          <Bio>Data: 17/08/2020</Bio>
        </User>
      </Container>
    </ScrollView>
  )
}

List.navigationOptions = {
  tabBarLabel: 'Liberações',
  tabBarIcon: ({ tintColor }) => <Icon name="directions-run" size={20} color={tintColor} />
}
