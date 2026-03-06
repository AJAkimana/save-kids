import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import {
  AccessTime,
  BookmarkBorder,
  Facebook,
  Instagram,
  Pinterest,
  Share,
  Twitter,
  YouTube,
} from '@mui/icons-material'
import { Link as RouterLink, useParams } from 'react-router-dom'
import { posts } from '../mock/home'

const socialIcons = [
  { label: 'Instagram', icon: <Instagram fontSize="small" /> },
  { label: 'Pinterest', icon: <Pinterest fontSize="small" /> },
  { label: 'Twitter', icon: <Twitter fontSize="small" /> },
  { label: 'Facebook', icon: <Facebook fontSize="small" /> },
  { label: 'YouTube', icon: <YouTube fontSize="small" /> },
]

const tableOfContents = [
  'Design a work ritual',
  'Build a low-friction desk',
  'Create a focus runway',
  'Schedule a reset window',
]

const highlights = [
  'Keep a single tray for daily tools.',
  'Replace visual clutter with a single anchor object.',
  'Work in 45-minute waves, then reset your surface.',
]

function PostDetails() {
  const { postId } = useParams()
  const post = posts.find((item) => item.id === postId) ?? posts[0]
  const relatedPosts = posts.filter((item) => item.id !== post.id).slice(0, 6)

  return (
    <Box>
      <Box
        sx={(theme) => ({
          position: 'relative',
          minHeight: { xs: 420, md: 520 },
          backgroundImage: `url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
          color: 'common.white',
          boxShadow: `0 18px 45px ${alpha(theme.palette.common.black, 0.28)}`,
        })}
      >
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(8, 12, 12, 0.55)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', py: { xs: 6, md: 10 } }}>
          <Stack spacing={2} sx={{ maxWidth: 720 }}>
            <Chip
              label={post.category}
              size="small"
              sx={{ bgcolor: alpha('#000', 0.55), color: 'common.white' }}
            />
            <Typography variant="h1">{post.title}</Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              The rituals, tools, and tiny resets that make creative work feel lighter.
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar sx={{ width: 32, height: 32 }}>J</Avatar>
                <Typography variant="body2">{post.author}</Typography>
              </Stack>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: 'rgba(255,255,255,0.3)' }}
              />
              <Stack direction="row" spacing={1} alignItems="center">
                <AccessTime fontSize="small" />
                <Typography variant="body2">{post.readTime}</Typography>
              </Stack>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: 'rgba(255,255,255,0.3)' }}
              />
              <Typography variant="body2">{post.date}</Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg" disableGutters>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack spacing={4}>
                <Card sx={{ p: { xs: 2.5, md: 3 }, bgcolor: 'rgba(255,255,255,0.7)' }}>
                  <Typography variant="overline" color="text.secondary">
                    Article overview
                  </Typography>
                  <Typography variant="body1">
                    This story maps a calm workflow, mixing tactile anchors with a few deliberate
                    breaks. A desk can be a ritual, not a trap.
                  </Typography>
                </Card>

                <Stack spacing={2}>
                  <Typography
                    variant="body1"
                    sx={{
                      '&::first-letter': {
                        float: 'left',
                        fontSize: '3.5rem',
                        lineHeight: 1,
                        fontWeight: 700,
                        paddingRight: 1,
                        fontFamily: 'Playfair Display, serif',
                        color: 'text.primary',
                      },
                    }}
                  >
                    The best workspaces feel curated, not crowded. The goal is not to minimize
                    everything, but to select a few intentional objects that lower friction. Think
                    of it as a runway for focus: everything in place, every item in service of the
                    next task.
                  </Typography>
                  <Typography variant="body1">
                    Start by giving each tool a home. A single tray for daily essentials, a narrow
                    shelf for reference books, and a compact charging station keep your desk from
                    swelling into chaos.
                  </Typography>
                </Stack>

                <Card
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    borderLeft: '4px solid',
                    borderColor: 'secondary.main',
                    bgcolor: alpha('#fff', 0.85),
                  }}
                >
                  <Stack spacing={1}>
                    <Typography variant="h4">
                      "Make it easy to begin. The rest will follow."
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Jeanne Wisk, editor in chief
                    </Typography>
                  </Stack>
                </Card>

                <Stack spacing={2}>
                  <Typography variant="h3">Design the ritual</Typography>
                  <Typography variant="body1">
                    The first ten minutes decide the shape of your day. Rituals compress the
                    distance between intention and momentum. A warm drink, a short playlist, and a
                    single open notebook are enough to signal that it is time to create.
                  </Typography>
                  <Typography variant="body1">
                    Pair that ritual with a reset window. Every 45 minutes, clear the surface and
                    close the task. Those micro resets stop the clutter from multiplying.
                  </Typography>
                </Stack>

                <Box
                  sx={{
                    display: 'grid',
                    gap: 2,
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                  }}
                >
                  <Card>
                    <CardMedia
                      component="img"
                      height="240"
                      image="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1000&q=80"
                    />
                  </Card>
                  <Card>
                    <CardMedia
                      component="img"
                      height="240"
                      image="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80"
                    />
                  </Card>
                </Box>

                <Stack spacing={2}>
                  <Typography variant="h3">Build a low-friction desk</Typography>
                  <Typography variant="body1">
                    Keep the essentials within reach. Everything else moves to the edges. Use
                    lighting that shifts from morning to evening, and keep a single "anchor" object
                    on the desk to hold the eye.
                  </Typography>
                  <Box component="ul" sx={{ m: 0, pl: 3, color: 'text.secondary' }}>
                    {highlights.map((item) => (
                      <Typography component="li" variant="body2" key={item} sx={{ mb: 1 }}>
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Stack>

                <Divider />

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {['Workflow', 'Mindset', 'Minimalism', 'Studio'].map((tag) => (
                      <Chip key={tag} label={tag} size="small" />
                    ))}
                  </Stack>
                  <Box sx={{ flex: 1 }} />
                  <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton aria-label="share">
                      <Share fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="bookmark">
                      <BookmarkBorder fontSize="small" />
                    </IconButton>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={3}>
                <Card sx={{ p: 3 }}>
                  <Typography variant="overline" color="text.secondary">
                    Table of contents
                  </Typography>
                  <Stack spacing={1.5} sx={{ mt: 2 }}>
                    {tableOfContents.map((item, index) => (
                      <Stack direction="row" spacing={1} key={item} alignItems="center">
                        <Typography variant="caption" color="text.secondary">
                          0{index + 1}
                        </Typography>
                        <Typography variant="body2">{item}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Card>

                <Card sx={{ p: 3 }}>
                  <Typography variant="overline" color="text.secondary">
                    Follow us
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    {socialIcons.map((item) => (
                      <IconButton key={item.label} aria-label={item.label}>
                        {item.icon}
                      </IconButton>
                    ))}
                  </Stack>
                </Card>

                <Card sx={{ p: 3 }}>
                  <Stack spacing={1}>
                    <Typography variant="h4">Newsletter</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Get weekly prompts, layouts, and creative rituals.
                    </Typography>
                    <TextField fullWidth size="small" placeholder="Enter your email" />
                    <Button variant="contained">Subscribe</Button>
                  </Stack>
                </Card>

                <Card sx={{ p: 3 }}>
                  <Typography variant="overline" color="text.secondary">
                    The latest
                  </Typography>
                  <Stack spacing={2} sx={{ mt: 2 }}>
                    {posts.slice(0, 3).map((item) => (
                      <Stack direction="row" spacing={2} key={item.id} alignItems="center">
                        <CardMedia
                          component="img"
                          image={item.image}
                          sx={{ width: 72, height: 72, borderRadius: 2, objectFit: 'cover' }}
                        />
                        <Box>
                          <Typography variant="subtitle2">{item.title}</Typography>
                          <Typography variant="caption" color="text.secondary">
                            {item.date}
                          </Typography>
                        </Box>
                      </Stack>
                    ))}
                  </Stack>
                </Card>

                <Card sx={{ p: 3, bgcolor: alpha('#000', 0.75), color: 'common.white' }}>
                  <Stack spacing={1}>
                    <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      About the author
                    </Typography>
                    <Typography variant="h4">Jeanne Wisk</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      Editor with a soft spot for ritual, light, and quiet corners.
                    </Typography>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ px: { xs: 2, md: 4 }, pb: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg" disableGutters>
          <Stack spacing={3}>
            <Stack spacing={1}>
              <Typography variant="h2">You may also like</Typography>
              <Typography variant="body2" color="text.secondary">
                More stories with calming rituals and thoughtful spaces.
              </Typography>
            </Stack>
            <Grid container spacing={3}>
              {relatedPosts.map((item) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia component="img" height="180" image={item.image} alt={item.title} />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Stack spacing={1.5}>
                        <Typography variant="subtitle1">{item.title}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {item.date} · {item.readTime}
                        </Typography>
                        <Link component={RouterLink} to={`/view/${item.id}`} underline="none">
                          View Post
                        </Link>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default PostDetails
