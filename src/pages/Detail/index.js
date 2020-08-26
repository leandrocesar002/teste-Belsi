import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Container, Bio, User, Name } from './styles';

export default function Detail({ navigation }) {
  return (
    <Container>
      <Name>Leandro Cesar Marques dos Santos</Name>
      <Bio>Situação: Liberado</Bio>
      <Bio>Data: 17/08/2020</Bio>
      <Bio>Situação: Liberado</Bio>
      <Bio>Data: 17/08/2020</Bio>
      <Bio>Situação: Liberado</Bio>
      <Bio>Data: 17/08/2020</Bio>
    </Container>
  )
}
