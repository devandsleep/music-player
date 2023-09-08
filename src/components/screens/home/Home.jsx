import { useState } from "react";
import { AuthContext } from "../../../context";
import MainContainer from "./main-container/MainContainer";
import AuthPage from "../authorization/AuthPage";

const Home = () => {
    const [isAuth, setIsAuth] = useState(false)

    return (
        <>
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth,
            }}>
                {isAuth ? <MainContainer /> : <AuthPage />}
                
            </AuthContext.Provider>
        </>
    );
}

export default Home;