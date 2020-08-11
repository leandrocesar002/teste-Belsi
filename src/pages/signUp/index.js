import React from 'react';
import { Image, StyleSheet } from 'react-native';

import logo from '~/assets/splash.png';

import Input from '~/components/Input';
import Button from '~/components/Button';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

const styles = StyleSheet.create({
  logo: {
    width: 350,
    height: 150,
    resizeMode: 'stretch',
  }
})

export default function SignUp({ navigation }) {
  return (
    <Container>
      <Image source={logo} style={styles.logo} />
      <Form>
        <FormInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome completo"
        />
        <FormInput
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
        />
        <FormInput
          secureTextEntry={true}
          placeholder="Sua Senha"
        />
        <FormInput
          secureTextEntry={true}
          placeholder="Confirmar Senha"
        />

        <SubmitButton onPress={() => { }}>
          Registrar-se
        </SubmitButton>
      </Form>

      <SignLink onPress={() => navigation.navigate('SignIn')}>
        <SignLinkText>Já possui uma conta?</SignLinkText>
      </SignLink>

    </Container>
  )
}
