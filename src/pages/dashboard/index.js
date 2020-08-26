import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import logo from '~/assets/splash.png';

import DatePicker from '~/components/DatePicker';

import { Container, SubmitButton, TextLabel, TextHorario } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  logo: {
    width: 350,
    height: 150,
    resizeMode: 'stretch',
  }
})

export default function Dashboard({ navigation }) {
  return (
    <Container>
      <TextLabel>Bem-vindo(a) Denian Souza!</TextLabel>
      <TextLabel>Condomínio Vila Flora</TextLabel>
      <TextLabel>Ultimos Acessos:</TextLabel>
      <TextHorario>22/08/2020 12:00:06</TextHorario>
      <TextHorario>22/08/2020 12:00:06</TextHorario>
      <TextHorario>22/08/2020 12:00:06</TextHorario>
    </Container>
  )
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Menu Principal',
  tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />
}
