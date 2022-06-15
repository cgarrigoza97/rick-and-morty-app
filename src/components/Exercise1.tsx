import { useState } from 'react';
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from '@mui/material/Stack';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

declare global {
  interface Window {
    firstExerciseFunc?: (x: (a: number) => void) => void;
  }
}

const sum = (numbers: number[]) => {
  const sum = numbers.reduce( (prev, curr) => (curr > 20 && curr % 2 === 0) ? 20 + prev : curr + prev, 0 )

  return (x: (a: number) => void) => x(sum)
}

export const Exercise1 = () => {

  const [numberValue, setNumberValue] = useState<string>('');
  const [numberList, setNumberList] = useState<number[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberValue(event.target.value);
  }

  const handleSubmit = () => {
    if (numberValue === '')
      return

    const newNumberList = [...numberList, Number(numberValue)]
    setNumberList(newNumberList)
    
    window.firstExerciseFunc = sum(newNumberList);

    setNumberValue('')
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography component="div" variant="h4">
          Exercise 1
        </Typography>

        <Stack spacing={1} direction="row" alignItems="center" > 
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="search-field">Number</InputLabel>
            <OutlinedInput
              id="search-field"
              value={numberValue}
              type="number"
              onChange={handleChange}
              label="Number"
            />
            </FormControl>

          <Button variant="contained" onClick={handleSubmit}>Add</Button>
        </Stack>

        <Typography component="div" variant="body1">
          Number list: { JSON.stringify(numberList) }
        </Typography>

        <Typography component="div" variant="body1" marginBottom="1rem">
          The result function can be found in window.firstExerciseFunc
        </Typography>
    </Box>
  )
}
