import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({
        name : '용의자 5658',
        point : 200,
        cash : 1200,
    });

    return (
        <UserContext.Provider value = {{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('UserContext에 오류가 생겼습니다.')
    }
    return context
}