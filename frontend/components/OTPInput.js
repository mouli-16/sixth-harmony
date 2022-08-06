import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'


const OTPInput = (props) => {
  const { numInputs = 6 } = props

  return (
    <Box component='form' noValidate sx={{ mt: 1 }}>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        align="center"
      >
        {[...new Array(numInputs)].map((_, i) => (
          <Grid
            item
            xs
            key={i}
          >
            <TextField
              size='small'
              sx={{ width: '0.6', mt:3}}
              InputProps={{
                style: { fontSize: 40 },
                inputMode: 'numeric',
                pattern: '[0-9]'
              }}
              inputProps={{
                maxLength: 1,
                style: { textAlign: 'center' }
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default OTPInput