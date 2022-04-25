import { Button, FormControlLabel, Switch } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import SaveIcon from '@mui/icons-material/Save'
import SendIcon from '@mui/icons-material/Send'
import { useState } from 'react'

export function TempEx() {
  return (
    <div>
      Nothing
    </div>
  )
}

export function ButtonEx() {
  const [loading, setLoading] = useState(false)
  const handleClick = () => {
    setLoading(!loading)
  }
  return (
    <div>
      <div>
        Basic Button
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
      <div>
        Text Button
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      </div>
      <div>
        Contained button
        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
        <Button variant="contained" disableElevation>
          Disable elevation
        </Button>
      </div>
      <div>
        Outlined Button
        <Button variant="outlined">Primary</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" href="#outlined-buttons">
          Link
        </Button>
      </div>
      <div>
        onClick event
        <Button
          onClick={() => {
            alert('clicked');
          }}
        >
          Click me
        </Button>
      </div>
      <div>
        Color
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error" >
          Error
        </Button>
      </div>

      <div>
        Loading Button
        <LoadingButton
          size="small"
          onClick={handleClick}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          Send
        </LoadingButton>
        <LoadingButton
          size="small"
          color="secondary"
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          Save
        </LoadingButton>
        <FormControlLabel
        sx={{
          display: 'block',
        }}
        control={
          <Switch
            checked={loading}
            onChange={handleClick}
            name="loading"
            color="primary"
          />
        }
        label="Loading"
      />
      </div>  
    </div>
  )
}