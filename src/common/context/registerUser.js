import { createContext, useState } from 'react';

export const RegisterUserContext = createContext();
RegisterUserContext.displayName = "UserRegister";

export const RegisterProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <RegisterUserContext.Provider value={{ email, setEmail, password, setPassword }}>
      {children}
    </RegisterUserContext.Provider>
  )
}