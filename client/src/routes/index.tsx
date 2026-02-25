import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import Category from '../views/Category'
import PostDetails from '../views/PostDetails'
import NotFound from '../views/NotFound'

const userRoutes = [
  { path: '/', element: <Home /> },
  { path: '/category/:categoryId', element: <Category /> },
  { path: '/post/:postId', element: <PostDetails /> },
] as const

function AppRoutes() {
  return (
    <Routes>
      {userRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
