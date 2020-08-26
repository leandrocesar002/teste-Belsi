import { Plataform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import Input from '~/components/Input';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const SearchInput = styled(Input)`
  margin-bottom: 10px;
`;

export const Inputt = styled.TextInput`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SearchButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #00507c;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
`;

export const Form = styled.View`
  margin-top: 15px;
  flex-direction: row;
  padding-bottom: 20px;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: #00507c;
  justify-content: center;
  align-items: center;
  height: 36px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
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
  text-align: center;
`;

export const User = styled.View`
  align-items: center;
  margin: 10px 20px 5px;
  border-top-width: 1px;
  border-color: #bbb;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
