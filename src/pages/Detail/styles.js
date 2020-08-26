import { Plataform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import Input from '~/components/Input';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px;
`;


export const Name = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
  text-align: left;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #333;
  margin-top: 5px;
  text-align: left;
`;

export const User = styled.View`
  align-items: flex-start;
  margin: 10px 20px 5px;
  border-top-width: 1px;
  border-color: #bbb;
`;
