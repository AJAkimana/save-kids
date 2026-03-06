import { Route, Routes } from 'react-router-dom'
import AdminLayout from '../components/layouts/AdminLayout'
import PublicLayout from '../components/layouts/PublicLayout'
import Home from '../views/Home'
import Category from '../views/Category'
import PostDetails from '../views/PostDetails'
import NotFound from '../views/NotFound'

const userRoutes = [
  { path: '/', element: <Home /> },
  { path: '/category/:categoryId', element: <Category /> },
  { path: '/post/:postId', element: <PostDetails /> },
  { path: '/view/:postId', element: <PostDetails /> },
] as const

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        {userRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
