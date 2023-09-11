import axios from "axios";

export default class AuthService {

    static async signIn(authData) {
        try {
            const response = await axios.post('http://localhost:3001/auth/registration', {
                username: authData.email,
                password: authData.password,
            }, { withCredentials: true })
            return response.data;
        } catch (error) {
            console.log("Error on user creation:", error)
        }
    }


    static async logIn(authData) {
        try {
            const response = await axios.post('http://localhost:3001/auth/login', {
                username: authData.email,
                password: authData.password,
            }, { withCredentials: true })
            return response.data;
        } catch (error) {
            console.log("Error on login:", error)
        }
    }

}