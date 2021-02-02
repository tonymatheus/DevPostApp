import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes() {
  const signed = false;
  const loading = false;

  if (loading) {
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#36393f',
      }}>
      <ActivityIndicator size={50} color={'#e52246'} />
    </View>;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
export default Routes;
