import React, {useState, createContext} from 'react';
import {Text, View} from 'react-native';

export const AuthContext = createContext({});

function AuthProvider({children}) {
  return (
    <AuthContext.Provider value={{signed: true}}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
