import { createContext, useState } from 'react';

export const RegisterUserContext = createContext();
RegisterUserContext.displayName = "UserRegister";

export const RegisterProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [emailValidation, setEmailValidation] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [charValidation, setCharValidation] = useState(false);
    const [uppercaseValidation, setUppercaseValidation] = useState(false);
    const [lowercaseValidation, setLowercaseValidation] = useState(false);
    const [numberValidation, setNumberValidation] = useState(false);
  return (
    <RegisterUserContext.Provider value={{ 
      email, setEmail, password, setPassword, charValidation, setCharValidation, emailValidation, setEmailValidation,
      passwordValidation, setPasswordValidation, uppercaseValidation, setUppercaseValidation, lowercaseValidation, 
      setLowercaseValidation, numberValidation, setNumberValidation }}>
      {children}
    </RegisterUserContext.Provider>
  )
}