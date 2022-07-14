import { createContext, useState } from 'react';

export const UserContext = createContext();
UserContext.displayName = "User";

export const UserProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [validaEmail, setValidaEmail] = useState(true);
    const [password, setPassword] = useState("");
    const [passwordValida, setValidaPassword] = useState(true);
    return (
        <UserContext.Provider value={{email, setEmail, validaEmail, setValidaEmail, password, setPassword,
passwordValida,setValidaPassword,}}>
            {children}
        </UserContext.Provider>
    )
}