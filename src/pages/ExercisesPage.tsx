import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Exercise1 } from "../components/Exercise1"
import { Exercise2 } from "../components/Exercise2"

export const ExercisesPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography component="div" variant="h2" marginBottom='2rem'>
        Exercises
      </Typography>
      
      <Exercise1 />

      <Exercise2 />
      
    </Box>
  )
}
