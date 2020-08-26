import React, { useRef } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

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

export default function SignIn({ navigation }) {
  const passwordRef = useRef();

  function handleSubmit() { }
  return (
    <Container>
      <Image source={logo} style={styles.logo} />
      <Form>
        <FormInput
          icon="email"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <FormInput
          icon="https"
          secureTextEntry={true}
          placeholder="Sua Senha"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Activate')}>
          <SubmitButton >
            Acessar
          </SubmitButton>
        </TouchableOpacity>
      </Form>

      <SignLink onPress={() => { navigation.navigate('SignUp') }}>
        <SignLinkText>Criar conta gratuita</SignLinkText>
      </SignLink>

    </Container>
  )
}
