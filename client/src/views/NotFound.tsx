import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function NotFound() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="sm">
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography variant="h2">Page not found</Typography>
          <Typography variant="body2" color="text.secondary">
            The page you are looking for does not exist yet.
          </Typography>
          <Button variant="contained" component={RouterLink} to="/">
            Back to home
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default NotFound
