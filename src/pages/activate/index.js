import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import logo from '~/assets/splash.png';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

const styles = StyleSheet.create({
  logo: {
    width: 350,
    height: 150,
    resizeMode: 'stretch',
  }
})

export default function Activate({ navigation }) {
  return (
    <Container>
      <Image source={logo} style={styles.logo} />
      <Form>
        <SignLinkText>LEANDRO CESAR MARQUES DOS SANTOS</SignLinkText>
        <FormInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Código de Ativação"
        />

        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <SubmitButton >
            Registrar-se
          </SubmitButton>
        </TouchableOpacity>
      </Form>
    </Container>
  )
}
