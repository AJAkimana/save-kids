import { Box, Container, Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

function PostDetails() {
  const { postId } = useParams()

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Stack spacing={2}>
          <Typography variant="h2">Post details</Typography>
          <Typography variant="body2" color="text.secondary">
            Post id: {postId}
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default PostDetails
