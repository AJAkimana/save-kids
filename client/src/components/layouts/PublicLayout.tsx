import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import AppFooter from './AppFooter'
import AppNavbar from './AppNavbar'

function PublicLayout() {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AppNavbar />
      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <AppFooter />
    </Box>
  )
}

export default PublicLayout
