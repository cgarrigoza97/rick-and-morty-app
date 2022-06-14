import { useState } from 'react';
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import Switch from '@mui/material/Switch';
import { ListNicknames } from "../components/ListNicknames"

export const Exercise2 = () => {

  const [textValue, setTextValue] = useState('')
  const [checked, setChecked] = useState(true);
  const [nameList, setNameList] = useState<string[]>([])


  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value)
  }

  const handleClear = () => {
    setTextValue('')
  }

  const handleSubmit = () => {
    setNameList([...nameList, textValue])
    setTextValue('')
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography component="div" variant="h4">
          Exercise 2
        </Typography>

        <Stack spacing={1} direction="row" alignItems="center" > 
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="search-field">Name</InputLabel>
              <OutlinedInput
                id="search-field"
                value={textValue}
                onChange={handleTextChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClear}
                      edge="end"
                    >
                      {textValue && <ClearIcon />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Name"
              />
            </FormControl>

            <Button variant="contained" onClick={handleSubmit}>Add</Button>

            <Typography variant='body1'>
              { checked ? 'ASC' : 'DESC' }
            </Typography>

            <Switch
              checked={checked}
              onChange={handleSwitchChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </Stack>

        <ListNicknames
          names={nameList}
          order={ checked ? 'ASC' : 'DESC' }
        />
    </Box>
  )
}
