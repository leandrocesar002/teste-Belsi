import { Plataform } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 30px;
`;

export const TextLabel = styled.Text`
  margin-top: 100px;
  font-size: 24px;
  color: #000;
`;

export const TextHorario = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  color: #000;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
