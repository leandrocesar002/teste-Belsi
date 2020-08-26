import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import logo from '~/assets/splash.png';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

const styles = StyleSheet.create({
  logo: {
    marginBottom: 90,
    width: 120,
    height: 120,
    borderRadius: 50,
    resizeMode: 'stretch',
    alignSelf: 'center',
  }
})

export default function Profile({ navigation }) {
  return (
    <Container>
      <Form>
        <Image source={logo} style={styles.logo} />
        <FormInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu nome"
        />
        <FormInput
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
        />
        <FormInput
          secureTextEntry={true}
          placeholder="Senha Atual"
        />
        <FormInput
          secureTextEntry={true}
          placeholder="Nova Senha"
        />

        <FormInput
          secureTextEntry={true}
          placeholder="Digitar Nova Senha"
        />
        <TouchableOpacity onPress={() => navigation.navigate('Activate')}>
          <SubmitButton >
            Salvar
          </SubmitButton>
        </TouchableOpacity>
      </Form>

    </Container>
  )
}

Profile.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={20} color={tintColor} />
}
