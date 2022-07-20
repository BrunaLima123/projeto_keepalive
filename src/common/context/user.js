import { createContext, useState } from 'react';

export const UserContext = createContext();
UserContext.displayName = "UserLogin";

export const UserLoginProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <UserContext.Provider value={{ email, setEmail, password, setPassword }}>
      {children}
    </UserContext.Provider>
  )
}