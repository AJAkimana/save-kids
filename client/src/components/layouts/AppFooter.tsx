import { Box, Button, Container, IconButton, Stack, TextField, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material'
import { footer } from '../../mock/home'

const socialIcons = {
  Instagram: <Instagram fontSize="small" />,
  Pinterest: <Pinterest fontSize="small" />,
  Twitter: <Twitter fontSize="small" />,
  Facebook: <Facebook fontSize="small" />,
}

function AppFooter() {
  return (
    <Box component="footer">
      <Box
        sx={(theme) => ({
          px: { xs: 2, md: 4 },
          py: { xs: 6, md: 8 },
          bgcolor: alpha(theme.palette.common.black, 0.85),
          color: 'common.white',
        })}
      >
        <Container maxWidth="md" disableGutters>
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography variant="h3">Sign up for our newsletters</Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Get notified of the best deals and curated travel stories each week.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ width: '100%' }}>
              <TextField
                fullWidth
                placeholder="Enter your email"
                variant="outlined"
                size="small"
                sx={{
                  input: { color: 'common.white' },
                  '& .MuiOutlinedInput-root': {
                    bgcolor: alpha('#fff', 0.08),
                    '& fieldset': { borderColor: alpha('#fff', 0.3) },
                  },
                }}
              />
              <Button variant="contained" color="secondary">
                Subscribe
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: 4, bgcolor: 'common.black', color: 'common.white' }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            alignItems={{ xs: 'flex-start', md: 'center' }}
            justifyContent="space-between"
          >
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              {footer.note}
            </Typography>
            <Stack direction="row" spacing={1}>
              {footer.socials.map((social) => (
                <IconButton key={social.label} color="inherit" size="small" href={social.href}>
                  {socialIcons[social.label as keyof typeof socialIcons]}
                </IconButton>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default AppFooter
