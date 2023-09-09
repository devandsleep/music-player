import AuthPage from "../components/screens/authorization/AuthPage"

export const privateRoutes = [
    {path: '/', component: <Posts />},
    {path: '/post/:postId', component: <PostPage />},
    {path: '/error', component: <Error />},
    {path: '/about', component: <About />},
]

export const publicRoutes = [
    {path: '/login', component: <AuthPage />},
]