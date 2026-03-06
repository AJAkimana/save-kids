import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Outlet />
    </Box>
  )
}

export default AdminLayout
