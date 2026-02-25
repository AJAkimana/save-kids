import { Box, Button, Chip, Container, Divider, Stack, Typography } from '@mui/material'

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: { xs: 6, md: 10 },
        background:
          'linear-gradient(180deg, rgba(30, 74, 74, 0.08) 0%, rgba(245, 241, 234, 0.9) 35%, rgba(245, 241, 234, 1) 100%)',
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Chip label="Inspiration by Travel" color="secondary" sx={{ width: 'fit-content' }} />
            <Typography variant="h1">5 Efficient Rules To Organize Your Working Place</Typography>
            <Typography variant="body1" color="text.secondary">
              A warm, editorial style for long-form reading. This theme is tuned for calm contrast,
              expressive headlines, and soft neutrals inspired by the screens you shared.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button variant="contained" color="primary">
                Start planning your trip
              </Button>
              <Button variant="outlined" color="primary">
                View latest posts
              </Button>
            </Stack>
          </Stack>
          <Divider />
          <Box>
            <Typography variant="overline" color="text.secondary">
              Typography Preview
            </Typography>
            <Typography variant="h2" sx={{ mt: 1 }}>
              Inspiration for travel by real people
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Use the Playfair + Manrope pairing for editorial layouts and comfortable body text.
              Buttons, chips, and cards use rounded shapes to match the soft visual language.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default App
