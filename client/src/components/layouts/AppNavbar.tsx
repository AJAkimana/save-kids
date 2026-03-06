import { AppBar, Button, IconButton, Link, Stack, Toolbar, Typography } from '@mui/material'
import { Search } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { navigation } from '../../mock/home'

function AppNavbar() {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ gap: 3, py: 1.5 }}>
        <Link component={RouterLink} to="/" underline="none" color="text.primary">
          <Typography variant="h6" sx={{ fontFamily: 'Playfair Display, serif' }}>
            Inspiration by traveler
          </Typography>
        </Link>
        <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' }, flex: 1 }}>
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} color="text.primary" underline="none">
              {item.label}
            </Link>
          ))}
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton aria-label="search">
            <Search fontSize="small" />
          </IconButton>
          <Button variant="contained" color="primary" size="small">
            Get free theme
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default AppNavbar
