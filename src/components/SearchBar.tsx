import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import { AppDispatch } from '../store/store';
import { useDispatch } from 'react-redux';
import { setSearchText, setCurrentPage } from '../actions/character';
import { useState } from 'react';

export const SearchBar = () => {

  const [textValue, setTextValue] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value)
  }

  const handleClear = () => {
    setTextValue('')
    dispatch(setCurrentPage(0))
    dispatch(setSearchText(''))
  }

  const handleSubmit = () => {
    dispatch(setSearchText(textValue))
  }

  return (
    <Stack spacing={1} direction="row" > 
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="search-field">Character name</InputLabel>
          <OutlinedInput
            id="search-field"
            value={textValue}
            onChange={handleChange}
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
            label="Password"
          />
        </FormControl>

        <Button variant="contained" onClick={handleSubmit}>Search</Button>
      </Stack>
  )
}
