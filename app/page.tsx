'use client'

import * as React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const [phoneNumber, setPhoneNumber] = React.useState<string>('')
  return (
    <main>
      <Box
        sx={{
          pt: 10,
          pb: 10,
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Your dream job is closer <br />
            than you think.
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Your network is your forest. <br />
            Find humans who want to plant this with you together.
          </Typography>
          <Typography
            variant="h4"
            align="center"
            color="text.primary"
            paragraph
          >
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            Based in Kansas City
          </Typography>
          <Container maxWidth="xs">
            <Stack
              sx={{ pt: 4 }}
              direction="column"
              spacing={2}
              justifyContent="center"
            >
              <Typography variant="h6" gutterBottom align="center">
                Text us to get started:
              </Typography>
              <TextField
                label="Phone Number"
                variant="outlined"
                margin="normal"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: '16px' }}
              >
                Continue
              </Button>
            </Stack>
          </Container>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography
          component="h3"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          How It Works
        </Typography>
        <Grid container spacing={5} alignItems="center">
          <Grid item key={1} xs={12} sm={6} md={4}>
            <Card
              raised
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardMedia component="div" src="/assets/seed.png">
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src="/assets/seed.png" // Route of the image file
                    height={64} // Desired size with correct aspect ratio
                    width={64} // Desired size with correct aspect ratio
                    alt="Seed"
                  />
                </div>
              </CardMedia>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h5"
                  align="center"
                >
                  Map Your Forest
                </Typography>
                <Divider
                  orientation="horizontal"
                  variant="middle"
                  flexItem
                  className="mb-2"
                />
                <Typography
                  gutterBottom
                  variant="body1"
                  align="center"
                  color="text.secondary"
                >
                  Bring us into your world, what you are looking for, where we
                  can help, and we create a plan.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item key={2} xs={12} sm={6} md={4}>
            <Card
              raised
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardMedia component="div" src="/assets/plant.png">
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src="/assets/plant.png" // Route of the image file
                    height={96} // Desired size with correct aspect ratio
                    width={96} // Desired size with correct aspect ratio
                    alt="Plant"
                  />
                </div>
              </CardMedia>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h5"
                  align="center"
                >
                  Match with a Guide
                </Typography>
                <Divider
                  orientation="horizontal"
                  variant="middle"
                  flexItem
                  className="mb-2"
                />
                <Typography
                  gutterBottom
                  variant="body1"
                  align="center"
                  color="text.secondary"
                >
                  We partner with local experts in KC, vetted professions to be
                  your career guide. You select your guide, and they get to
                  work.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item key={3} xs={12} sm={6} md={4}>
            <Card
              raised
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardMedia component="div" src="/assets/sprout.png">
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src="/assets/sprout.png" // Route of the image file
                    height={96} // Desired size with correct aspect ratio
                    width={96} // Desired size with correct aspect ratio
                    alt="Sprout"
                  />
                </div>
              </CardMedia>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h5"
                  align="center"
                >
                  Plant Your Seeds
                </Typography>
                <Divider
                  orientation="horizontal"
                  variant="middle"
                  flexItem
                  className="mb-2"
                />
                <Typography
                  gutterBottom
                  variant="body1"
                  align="center"
                  color="text.secondary"
                >
                  Get to work planting your seeds with the help of your guide -
                  connect with companies & employees, submit applications, and
                  watch these seeds grow
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}
