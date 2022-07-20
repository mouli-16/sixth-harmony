import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useState } from 'react'

import OTPInput from '../../components/OTPInput'


const LoginA = ({ setIsDone }) => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsDone(true)
    const data = new FormData(e.currentTarget)
    const entry = {
      name: data.get('name'),
      aadhaarNumber: data.get('aadhaarNumber')
    }
    console.log(entry)
    //POST entry
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component='h1' variant='h5'>
            Log In
          </Typography>
          <Box component='form' noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <TextField
              autoComplete="name"
              label="Name"
              margin="normal"
              name="name"
              autoFocus
              fullWidth
              required
            />
            <TextField
              autoComplete="off"
              label="Aadhaar Number "
              margin="normal"
              name="aadhaarNumber"
              fullWidth
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
          </Box>
        </Box>
      </CssBaseline>
    </Container>
  )
}

const LoginB = () => {
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component='h1' variant='h5'>
            Verify
          </Typography>
          <Typography variant='subtitle1'>
            {"Enter 6 digit verification code sent to 91XXXXX724"}
          </Typography>
          <OTPInput numInputs={6} />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, width: '0.5' }}
          >
            Verify
          </Button>
        </Box>
      </CssBaseline>
    </Container>
  )
}

const Login = () => {
  const [isDone, setIsDone] = useState(false)
  return (
    <>
      {
        !isDone ? <LoginA setIsDone={setIsDone} /> : <LoginB />
      }
    </>
  )
}

export default Login
