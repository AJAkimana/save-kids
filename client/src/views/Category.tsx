import { Box, Container, Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

function Category() {
  const { categoryId } = useParams()

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Stack spacing={2}>
          <Typography variant="h2">Category</Typography>
          <Typography variant="body2" color="text.secondary">
            Category id: {categoryId}
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default Category
