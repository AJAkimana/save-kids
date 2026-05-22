import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import DeleteOutline from '@mui/icons-material/DeleteOutline'
import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import SunEditor from 'suneditor-react'
import { posts, type PostCard, type PostDetailsContent } from '../../mock/home'

const clone = <T,>(value: T): T => structuredClone(value)

const emptyDetails: PostDetailsContent = {
  heroSubtitle: '',
  overview: { title: '', bodyHtml: '' },
  lead: '',
  introHtml: '',
  quote: { text: '', author: '' },
  sectionOne: { title: '', bodyHtml: '' },
  gallery: [{ image: '', alt: '' }],
  sectionTwo: { title: '', bodyHtml: '', highlights: [''] },
  tags: [''],
  toc: [''],
  tocTitle: '',
  social: [{ label: '' }],
  socialTitle: '',
  newsletter: {
    title: '',
    description: '',
    placeholder: '',
    buttonLabel: '',
  },
  author: { name: '', role: '', bio: '' },
  authorTitle: '',
  latestHeading: '',
  richContentHtml: '',
  related: { title: '', subtitle: '' },
  relatedCtaLabel: '',
}

const emptyPost: PostCard = {
  id: '',
  title: '',
  excerpt: '',
  image: '',
  author: '',
  date: '',
  readTime: '',
  category: '',
  details: emptyDetails,
}

const PostEdit = () => {
  const { postId } = useParams()
  const initialPost = useMemo(() => {
    const existing = posts.find((item) => item.id === postId)
    return existing ? clone(existing) : clone(emptyPost)
  }, [postId])
  const [draft, setDraft] = useState<PostCard>(initialPost)

  const updatePost = (key: keyof PostCard, value: PostCard[keyof PostCard]) => {
    setDraft((prev) => ({ ...prev, [key]: value }))
  }

  const updateDetails = (updater: (details: PostDetailsContent) => PostDetailsContent) => {
    setDraft((prev) => ({ ...prev, details: updater(prev.details) }))
  }

  const updateStringList = (list: string[], index: number, value: string) =>
    list.map((item, current) => (current === index ? value : item))
  const removeStringList = (list: string[], index: number) =>
    list.filter((_, current) => current !== index)

  const handleSave = () => {
    console.log('Post draft', draft)
  }

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems={{ xs: 'flex-start', md: 'center' }}
            justifyContent="space-between"
            spacing={2}
          >
            <Box>
              <Typography variant="h2">{postId ? 'Edit post' : 'Create post'}</Typography>
              <Typography variant="body2" color="text.secondary">
                Configure every detail shown on the post details page.
              </Typography>
            </Box>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined">Preview</Button>
              <Button variant="contained" onClick={handleSave}>
                Save draft
              </Button>
            </Stack>
          </Stack>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack spacing={3}>
                <Card>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h4">Post basics</Typography>
                      <TextField
                        label="Post ID"
                        value={draft.id}
                        onChange={(event) => updatePost('id', event.target.value)}
                        fullWidth
                      />
                      <TextField
                        label="Title"
                        value={draft.title}
                        onChange={(event) => updatePost('title', event.target.value)}
                        fullWidth
                      />
                      <TextField
                        label="Excerpt"
                        value={draft.excerpt}
                        onChange={(event) => updatePost('excerpt', event.target.value)}
                        multiline
                        minRows={3}
                        fullWidth
                      />
                      <TextField
                        label="Hero image URL"
                        value={draft.image}
                        onChange={(event) => updatePost('image', event.target.value)}
                        fullWidth
                      />
                      <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            label="Author"
                            value={draft.author}
                            onChange={(event) => updatePost('author', event.target.value)}
                            fullWidth
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            label="Category"
                            value={draft.category}
                            onChange={(event) => updatePost('category', event.target.value)}
                            fullWidth
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            label="Publish date"
                            value={draft.date}
                            onChange={(event) => updatePost('date', event.target.value)}
                            fullWidth
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            label="Read time"
                            value={draft.readTime}
                            onChange={(event) => updatePost('readTime', event.target.value)}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Stack>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h4">Hero</Typography>
                      <TextField
                        label="Hero subtitle"
                        value={draft.details.heroSubtitle}
                        onChange={(event) =>
                          updateDetails((details) => ({
                            ...details,
                            heroSubtitle: event.target.value,
                          }))
                        }
                        fullWidth
                      />
                    </Stack>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h4">Overview</Typography>
                      <TextField
                        label="Overview title"
                        value={draft.details.overview.title}
                        onChange={(event) =>
                          updateDetails((details) => ({
                            ...details,
                            overview: { ...details.overview, title: event.target.value },
                          }))
                        }
                        fullWidth
                      />
                      <Typography variant="subtitle2" color="text.secondary">
                        Overview body
                      </Typography>
                      <SunEditor
                        setContents={draft.details.overview.bodyHtml}
                        onChange={(value) =>
                          updateDetails((details) => ({
                            ...details,
                            overview: { ...details.overview, bodyHtml: value },
                          }))
                        }
                        height="180px"
                        setOptions={{
                          buttonList: [['bold', 'italic', 'underline', 'list', 'link']],
                        }}
                      />
                    </Stack>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h4">Intro</Typography>
                      <TextField
                        label="Lead paragraph"
                        value={draft.details.lead}
                        onChange={(event) =>
                          updateDetails((details) => ({ ...details, lead: event.target.value }))
                        }
                        multiline
                        minRows={2}
                        fullWidth
                      />
                      <Typography variant="subtitle2" color="text.secondary">
                        Intro body
                      </Typography>
                      <SunEditor
                        setContents={draft.details.introHtml}
                        onChange={(value) =>
                          updateDetails((details) => ({ ...details, introHtml: value }))
                        }
                        height="200px"
                        setOptions={{
                          buttonList: [['bold', 'italic', 'underline', 'list', 'link']],
                        }}
                      />
                    </Stack>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h4">Quote callout</Typography>
                      <TextField
                        label="Quote"
                        value={draft.details.quote.text}
                        onChange={(event) =>
                          updateDetails((details) => ({
                            ...details,
                            quote: { ...details.quote, text: event.target.value },
                          }))
                        }
                        fullWidth
                      />
                      <TextField
                        label="Quote attribution"
                        value={draft.details.quote.author}
                        onChange={(event) =>
                          updateDetails((details) => ({
                            ...details,
                            quote: { ...details.quote, author: event.target.value },
                          }))
                        }
                        fullWidth
                      />
                    </Stack>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h4">Section one</Typography>
                      <TextField
                        label="Section title"
                        value={draft.details.sectionOne.title}
                        onChange={(event) =>
                          updateDetails((details) => ({
                            ...details,
                            sectionOne: { ...details.sectionOne, title: event.target.value },
                          }))
                        }
                        fullWidth
                      />
                      <SunEditor
                        setContents={draft.details.sectionOne.bodyHtml}
                        onChange={(value) =>
                          updateDetails((details) => ({
                            ...details,
                            sectionOne: { ...details.sectionOne, bodyHtml: value },
                          }))
                        }
                        height="220px"
                        setOptions={{
                          buttonList: [['bold', 'italic', 'underline', 'list', 'link']],
                        }}
                      />
                    </Stack>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h4">Gallery</Typography>
                      {draft.details.gallery.map((item, index) => (
                        <Stack key={`${item.image}-${index}`} spacing={2} direction="row">
                          <TextField
                            label="Image URL"
                            value={item.image}
                            onChange={(event) =>
                              updateDetails((details) => ({
                                ...details,
                                gallery: details.gallery.map((entry, current) =>
                                  current === index
                                    ? { ...entry, image: event.target.value }
                                    : entry,
                                ),
                              }))
                            }
                            fullWidth
                          />
                          <TextField
                            label="Alt text"
                            value={item.alt}
                            onChange={(event) =>
                              updateDetails((details) => ({
                                ...details,
                                gallery: details.gallery.map((entry, current) =>
                                  current === index ? { ...entry, alt: event.target.value } : entry,
                                ),
                              }))
                            }
                            fullWidth
                          />
                          <IconButton
                            aria-label="remove image"
                            onClick={() =>
                              updateDetails((details) => ({
                                ...details,
                                gallery: details.gallery.filter((_, current) => current !== index),
                              }))
                            }
                          >
                            <DeleteOutline />
                          </IconButton>
                        </Stack>
                      ))}
                      <Button
                        variant="outlined"
                        onClick={() =>
                          updateDetails((details) => ({
                            ...details,
                            gallery: [...details.gallery, { image: '', alt: '' }],
                          }))
                        }
                      >
                        Add gallery image
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h4">Section two</Typography>
                      <TextField
                        label="Section title"
                        value={draft.details.sectionTwo.title}
                        onChange={(event) =>
                          updateDetails((details) => ({
                            ...details,
                            sectionTwo: { ...details.sectionTwo, title: event.target.value },
                          }))
                        }
                        fullWidth
                      />
                      <SunEditor
                        setContents={draft.details.sectionTwo.bodyHtml}
                        onChange={(value) =>
                          updateDetails((details) => ({
                            ...details,
                            sectionTwo: { ...details.sectionTwo, bodyHtml: value },
                          }))
                        }
                        height="220px"
                        setOptions={{
                          buttonList: [['bold', 'italic', 'underline', 'list', 'link']],
                        }}
                      />
                      <Divider />
                      <Typography variant="subtitle2" color="text.secondary">
                        Highlights
                      </Typography>
                      {draft.details.sectionTwo.highlights.map((item, index) => (
                        <Stack key={`${item}-${index}`} direction="row" spacing={2}>
                          <TextField
                            value={item}
                            onChange={(event) =>
                              updateDetails((details) => ({
                                ...details,
                                sectionTwo: {
                                  ...details.sectionTwo,
                                  highlights: updateStringList(
                                    details.sectionTwo.highlights,
                                    index,
                                    event.target.value,
                                  ),
                                },
                              }))
                            }
                            fullWidth
                          />
                          <IconButton
                            aria-label="remove highlight"
                            onClick={() =>
                              updateDetails((details) => ({
                                ...details,
                                sectionTwo: {
                                  ...details.sectionTwo,
                                  highlights: removeStringList(
                                    details.sectionTwo.highlights,
                                    index,
                                  ),
                                },
                              }))
                            }
                          >
                            <DeleteOutline />
                          </IconButton>
                        </Stack>
                      ))}
                      <Button
                        variant="outlined"
                        onClick={() =>
                          updateDetails((details) => ({
                            ...details,
                            sectionTwo: {
                              ...details.sectionTwo,
                              highlights: [...details.sectionTwo.highlights, ''],
                            },
                          }))
                        }
                      >
                        Add highlight
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h4">Rich content</Typography>
                      <SunEditor
                        setContents={draft.details.richContentHtml}
                        onChange={(value) =>
                          updateDetails((details) => ({
                            ...details,
                            richContentHtml: value,
                          }))
                        }
                        height="240px"
                        setOptions={{
                          buttonList: [['bold', 'italic', 'underline', 'list', 'link']],
                        }}
                      />
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={3}>
                <Card>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h4">Sidebar</Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        Table of contents
                      </Typography>
                      <TextField
                        label="TOC title"
                        value={draft.details.tocTitle}
                        onChange={(event) =>
                          updateDetails((details) => ({
                            ...details,
                            tocTitle: event.target.value,
                          }))
                        }
                        fullWidth
                      />
                      {draft.details.toc.map((item, index) => (
                        <Stack key={`${item}-${index}`} direction="row" spacing={2}>
                          <TextField
                            value={item}
                            onChange={(event) =>
                              updateDetails((details) => ({
                                ...details,
                                toc: updateStringList(details.toc, index, event.target.value),
                              }))
                            }
                            fullWidth
                          />
                          <IconButton
                            aria-label="remove toc"
                            onClick={() =>
                              updateDetails((details) => ({
                                ...details,
                                toc: removeStringList(details.toc, index),
                              }))
                            }
                          >
                            <DeleteOutline />
                          </IconButton>
                        </Stack>
                      ))}
                      <Button
                        variant="outlined"
                        onClick={() =>
                          updateDetails((details) => ({
                            ...details,
                            toc: [...details.toc, ''],
                          }))
                        }
                      >
                        Add toc item
                      </Button>
                      <Divider />
                      <Typography variant="subtitle2" color="text.secondary">
                        Social links
                      </Typography>
                      <TextField
                        label="Social title"
                        value={draft.details.socialTitle}
                        onChange={(event) =>
                          updateDetails((details) => ({
                            ...details,
                            socialTitle: event.target.value,
                          }))
                        }
                        fullWidth
                      />
                      {draft.details.social.map((item, index) => (
                        <Stack key={`${item.label}-${index}`} direction="row" spacing={2}>
                          <TextField
                            label="Label"
                            value={item.label}
                            onChange={(event) =>
                              updateDetails((details) => ({
                                ...details,
                                social: details.social.map((entry, current) =>
                                  current === index
                                    ? { ...entry, label: event.target.value }
                                    : entry,
                                ),
                              }))
                            }
                            fullWidth
                          />
                          <TextField
                            label="Href"
                            value={item.href ?? ''}
                            onChange={(event) =>
                              updateDetails((details) => ({
                                ...details,
                                social: details.social.map((entry, current) =>
                                  current === index
                                    ? { ...entry, href: event.target.value }
                                    : entry,
                                ),
                              }))
                            }
                            fullWidth
                          />
                          <IconButton
                            aria-label="remove social"
                            onClick={() =>
                              updateDetails((details) => ({
                                ...details,
                                social: details.social.filter((_, current) => current !== index),
                              }))
                            }
                          >
                            <DeleteOutline />
                          </IconButton>
                        </Stack>
                      ))}
                      <Button
                        variant="outlined"
                        onClick={() =>
                          updateDetails((details) => ({
                            ...details,
                            social: [...details.social, { label: '', href: '' }],
                          }))
                        }
                      >
                        Add social link
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h4">Newsletter</Typography>
                      <TextField
                        label="Title"
                        value={draft.details.newsletter.title}
                        onChange={(event) =>
                          updateDetails((details) => ({
                            ...details,
                            newsletter: { ...details.newsletter, title: event.target.value },
                          }))
                        }
                        fullWidth
                      />
                      <TextField
                        label="Description"
                        value={draft.details.newsletter.description}
                        onChange={(event) =>
                          updateDetails((details) => ({
                            ...details,
                            newsletter: {
                              ...details.newsletter,
                              description: event.target.value,
                            },
                          }))
                        }
                        multiline
                        minRows={2}
                        fullWidth
                      />
                      <TextField
                        label="Placeholder"
                        value={draft.details.newsletter.placeholder}
                        onChange={(event) =>
                          updateDetails((details) => ({
                            ...details,
                            newsletter: {
                              ...details.newsletter,
                              placeholder: event.target.value,
                            },
                          }))
                        }
                        fullWidth
                      />
                      <TextField
                        label="Button label"
                        value={draft.details.newsletter.buttonLabel}
                        onChange={(event) =>
                          updateDetails((details) => ({
                            ...details,
                            newsletter: {
                              ...details.newsletter,
                              buttonLabel: event.target.value,
                            },
                          }))
                        }
                        fullWidth
                      />
                    </Stack>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h4">Author panel</Typography>
                      <TextField
                        label="Panel title"
                        value={draft.details.authorTitle}
                        onChange={(event) =>
                          updateDetails((details) => ({
                            ...details,
                            authorTitle: event.target.value,
                          }))
                        }
                        fullWidth
                      />
                      <TextField
                        label="Name"
                        value={draft.details.author.name}
                        onChange={(event) =>
                          updateDetails((details) => ({
                            ...details,
                            author: { ...details.author, name: event.target.value },
                          }))
                        }
                        fullWidth
                      />
                      <TextField
                        label="Role"
                        value={draft.details.author.role}
                        onChange={(event) =>
                          updateDetails((details) => ({
                            ...details,
                            author: { ...details.author, role: event.target.value },
                          }))
                        }
                        fullWidth
                      />
                      <TextField
                        label="Bio"
                        value={draft.details.author.bio}
                        onChange={(event) =>
                          updateDetails((details) => ({
                            ...details,
                            author: { ...details.author, bio: event.target.value },
                          }))
                        }
                        multiline
                        minRows={3}
                        fullWidth
                      />
                    </Stack>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h4">Related section</Typography>
                      <TextField
                        label="Related title"
                        value={draft.details.related.title}
                        onChange={(event) =>
                          updateDetails((details) => ({
                            ...details,
                            related: { ...details.related, title: event.target.value },
                          }))
                        }
                        fullWidth
                      />
                      <TextField
                        label="Related subtitle"
                        value={draft.details.related.subtitle}
                        onChange={(event) =>
                          updateDetails((details) => ({
                            ...details,
                            related: { ...details.related, subtitle: event.target.value },
                          }))
                        }
                        multiline
                        minRows={2}
                        fullWidth
                      />
                      <TextField
                        label="Latest heading"
                        value={draft.details.latestHeading}
                        onChange={(event) =>
                          updateDetails((details) => ({
                            ...details,
                            latestHeading: event.target.value,
                          }))
                        }
                        fullWidth
                      />
                      <TextField
                        label="Related CTA label"
                        value={draft.details.relatedCtaLabel}
                        onChange={(event) =>
                          updateDetails((details) => ({
                            ...details,
                            relatedCtaLabel: event.target.value,
                          }))
                        }
                        fullWidth
                      />
                    </Stack>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h4">Tags</Typography>
                      {draft.details.tags.map((item, index) => (
                        <Stack key={`${item}-${index}`} direction="row" spacing={2}>
                          <TextField
                            value={item}
                            onChange={(event) =>
                              updateDetails((details) => ({
                                ...details,
                                tags: updateStringList(details.tags, index, event.target.value),
                              }))
                            }
                            fullWidth
                          />
                          <IconButton
                            aria-label="remove tag"
                            onClick={() =>
                              updateDetails((details) => ({
                                ...details,
                                tags: removeStringList(details.tags, index),
                              }))
                            }
                          >
                            <DeleteOutline />
                          </IconButton>
                        </Stack>
                      ))}
                      <Button
                        variant="outlined"
                        onClick={() =>
                          updateDetails((details) => ({
                            ...details,
                            tags: [...details.tags, ''],
                          }))
                        }
                      >
                        Add tag
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

export default PostEdit
