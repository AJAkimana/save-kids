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
  Link,
  Stack,
  Typography,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'
import {
  categoryCards,
  categoryFeature,
  categoryList,
  categoryTabs,
  destinations,
  featured,
  hero,
  posts,
} from '../mock/home'

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <Stack spacing={1} sx={{ mb: 4 }}>
    <Typography variant="h2">{title}</Typography>
    {subtitle ? (
      <Typography variant="body2" color="text.secondary">
        {subtitle}
      </Typography>
    ) : null}
  </Stack>
)

const PostCardItem = ({ post }: { post: (typeof posts)[number] }) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <Box sx={{ position: 'relative' }}>
      <CardMedia component="img" height="220" image={post.image} alt={post.title} />
      <Chip
        label={post.category}
        size="small"
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          bgcolor: alpha('#000', 0.6),
          color: 'common.white',
        }}
      />
    </Box>
    <CardContent sx={{ flexGrow: 1 }}>
      <Stack spacing={1.5}>
        <Typography variant="h4" component="h3">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.excerpt}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
          <Avatar sx={{ width: 28, height: 28 }}>J</Avatar>
          <Typography variant="caption" color="text.secondary">
            {post.author}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="caption" color="text.secondary">
            {post.date}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="caption" color="text.secondary">
            {post.readTime}
          </Typography>
        </Stack>
        <Link component={RouterLink} to={`/view/${post.id}`} underline="none" color="primary">
          View Post
        </Link>
      </Stack>
    </CardContent>
  </Card>
)

function Home() {
  return (
    <Box>
      <Box
        sx={(theme) => ({
          position: 'relative',
          minHeight: { xs: 360, md: 420 },
          backgroundImage: `url(${hero.image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'flex-end',
          color: 'common.white',
          boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.25)}`,
        })}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(0, 0, 0, 0.35)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', py: { xs: 6, md: 10 } }}>
          <Stack spacing={2} sx={{ maxWidth: 560 }}>
            <Typography variant="overline" sx={{ color: 'common.white' }}>
              {hero.kicker}
            </Typography>
            <Typography variant="h1">{hero.title}</Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              {hero.subtitle}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button variant="contained" color="secondary">
                {hero.primaryCta}
              </Button>
              <Button variant="outlined" color="inherit">
                {hero.secondaryCta}
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ px: { xs: 2, md: 4 }, pb: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg" disableGutters>
          <SectionTitle
            title="Latest posts"
            subtitle="Discover stories and itineraries from the community."
          />
          <Grid container spacing={4}>
            {posts.map((post) => (
              <Grid size={{ xs: 12, md: 4 }} key={post.id}>
                <PostCardItem post={post} />
              </Grid>
            ))}
          </Grid>
          <Stack alignItems="center" sx={{ mt: 5 }}>
            <Button variant="outlined">Load more</Button>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ px: { xs: 2, md: 4 }, pb: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg" disableGutters>
          <Card
            sx={{
              position: 'relative',
              borderRadius: 4,
              overflow: 'hidden',
              minHeight: { xs: 260, md: 320 },
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CardMedia
              component="img"
              image={featured.image}
              alt={featured.title}
              sx={{ position: 'absolute', inset: 0, height: '100%' }}
            />
            <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(16, 26, 25, 0.55)' }} />
            <Stack spacing={2} sx={{ position: 'relative', p: { xs: 3, md: 6 }, maxWidth: 520 }}>
              <Typography variant="h2" sx={{ color: 'common.white' }}>
                {featured.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                {featured.subtitle}
              </Typography>
              <Button variant="contained" color="secondary">
                {featured.cta}
              </Button>
            </Stack>
          </Card>
        </Container>
      </Box>

      <Box sx={{ px: { xs: 2, md: 4 }, pb: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg" disableGutters>
          <SectionTitle
            title="Top destinations"
            subtitle="Handpicked escapes with cinematic views and calm itineraries."
          />
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' },
            }}
          >
            {destinations.map((destination) => (
              <Card key={destination.id} sx={{ position: 'relative', overflow: 'hidden' }}>
                <CardMedia component="img" height="160" image={destination.image} />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.3)',
                  }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{
                    position: 'absolute',
                    bottom: 12,
                    left: 12,
                    color: 'common.white',
                    fontWeight: 600,
                  }}
                >
                  {destination.name}
                </Typography>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ px: { xs: 2, md: 4 }, pb: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg" disableGutters>
          <Stack direction="row" spacing={3} sx={{ mb: 2, flexWrap: 'wrap' }}>
            {categoryTabs.map((tab) => (
              <Typography key={tab.id} variant="subtitle2" color="text.secondary">
                {tab.label}
              </Typography>
            ))}
          </Stack>
          <Divider sx={{ mb: 4 }} />
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card>
                <CardMedia component="img" height="220" image={categoryFeature.image} />
                <CardContent>
                  <Stack spacing={1.5}>
                    <Typography variant="caption" color="text.secondary">
                      {categoryFeature.meta}
                    </Typography>
                    <Typography variant="h4" component="h3">
                      {categoryFeature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {categoryFeature.description}
                    </Typography>
                    <Link href="#" underline="none" color="primary">
                      {categoryFeature.cta}
                    </Link>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Stack spacing={2}>
                {categoryList.map((item) => (
                  <Stack key={item.id} direction="row" spacing={2}>
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{ width: 72, height: 72, borderRadius: 1.5, objectFit: 'cover' }}
                    />
                    <Stack spacing={0.5}>
                      <Typography variant="subtitle2">{item.title}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.date}
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="subtitle2" sx={{ mb: 2 }}>
                    Manga reads
                  </Typography>
                  <Stack spacing={2}>
                    {categoryCards.map((item) => (
                      <Stack key={item.id} direction="row" spacing={2}>
                        <Box
                          component="img"
                          src={item.image}
                          alt={item.title}
                          sx={{ width: 72, height: 72, borderRadius: 1.5, objectFit: 'cover' }}
                        />
                        <Stack spacing={0.5}>
                          <Typography variant="subtitle2">{item.title}</Typography>
                          <Typography variant="caption" color="text.secondary">
                            {item.date}
                          </Typography>
                        </Stack>
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Home
