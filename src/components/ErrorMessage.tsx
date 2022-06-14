import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props {
  error: string | undefined;
}

export const ErrorMessage = ({ error }: Props) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography component="div" variant="h2" marginBottom='2rem'>
        An error has occurred
      </Typography>

      <Typography component="div" variant="h2" marginBottom='2rem'>
        { error }
      </Typography>
    </Box>
  )
}
