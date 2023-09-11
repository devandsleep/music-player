import AuthPage from "../components/screens/authorization/AuthPage"
import Home from '../components/screens/home/Home'

export const privateRoutes = [
    {path: '/', component: <Home />},
]

export const publicRoutes = [
    {path: '/login', component: <AuthPage />},
]