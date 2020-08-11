import React from 'react';
import { Image, StyleSheet } from 'react-native';

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
        <FormInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Código de Ativação"
        />

        <SubmitButton onPress={() => { }}>
          Registrar-se
        </SubmitButton>
      </Form>
    </Container>
  )
}
