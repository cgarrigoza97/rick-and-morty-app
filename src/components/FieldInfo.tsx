import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface Props {
  fieldName: string;
  fieldValue: string;
}

export const FieldInfo = (props: Props) => {
  return (
    <Stack spacing={1} direction="row">
      <Typography component="div" variant="subtitle1">
        <strong>{props.fieldName + ':'}</strong>
      </Typography>
      <Typography component="div" variant="subtitle1">
        {props.fieldValue}
      </Typography>
    </Stack>
  )
}
