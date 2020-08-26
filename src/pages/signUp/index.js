import React, { useRef } from 'react';
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
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const emailRef = useRef();

  function handleSubmit() { }
  return (
    <Container>
      <Image source={logo} style={styles.logo} />
      <Form>
        <FormInput
          icon="person"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome completo"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <FormInput
          icon="email"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          ref={emailRef}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <FormInput
          icon="https"
          secureTextEntry={true}
          placeholder="Sua Senha"
          ref={passwordRef}
          returnKeyType="next"
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
        />
        <FormInput
          icon="https"
          secureTextEntry={true}
          placeholder="Confirmar Senha"
          ref={confirmPasswordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />

        <SubmitButton onPress={handleSubmit}>
          Registrar-se
        </SubmitButton>
      </Form>

      <SignLink onPress={() => navigation.navigate('SignIn')}>
        <SignLinkText>Já possui uma conta?</SignLinkText>
      </SignLink>

    </Container>
  )
}
