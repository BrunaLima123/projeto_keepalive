import { createContext, useState } from 'react';

export const UserContext = createContext();
UserContext.displayName = "UserLogin";

export const UserLoginProvider = ({ children }) => {
  const [email, setEmail ] = useState('');
  const [emailValidation, setEmailValidation] =useState(true);
  const [password, setPassword, ] = useState('');
  const [passwordValidation, setPasswordValidation] =useState(true);
  return (
    <UserContext.Provider value={{ passwordValidation, setPasswordValidation, email,setEmail, emailValidation, setEmailValidation, password, setPassword }}>
      {children}
    </UserContext.Provider>
  )
}