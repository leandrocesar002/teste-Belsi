import React from 'react';
import { StatusBar } from 'react-native';

import createRouter from './routes';

export default function App() {
  const signed = true;

  const Routes = createRouter(signed);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#00507c" />
      <Routes />
    </>
  )
}
