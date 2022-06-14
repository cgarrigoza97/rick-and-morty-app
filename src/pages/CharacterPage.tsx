import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import CardContent from '@mui/material/CardContent/CardContent';
import { FieldInfo } from '../components/FieldInfo';
import { CharacterResponse, CharacterVars, CharacterPageItemResult } from '../interfaces/interfaces';
import { removeFromFavorites, addToFavorites } from '../actions/character';
import { CHARACTER_QUERY } from '../queries/queries';
import { ErrorMessage } from '../components/ErrorMessage';
import { useFavorites } from '../hooks/useFavorites';



export const CharacterPage = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const { favorites } = useFavorites();
  const { loading, error, data } = useQuery<CharacterResponse, CharacterVars>(CHARACTER_QUERY, { variables: { id: params.id! } });

  const isFavorite = favorites.findIndex(c => c.id === params.id) !== -1;

  const handleCardClick = () => 
  {
    const character: CharacterPageItemResult = {
      id: params.id!,
      image: data!.character.image,
      name: data!.character.name,
    }

    if (isFavorite)
      dispatch(removeFromFavorites(character))
    else 
      dispatch(addToFavorites(character))

  }

  if (loading)
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
        <CircularProgress />
      </Box>
    )

  if (error)
    return (
      <ErrorMessage error={error?.message} />
    )

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography component="div" variant="h2" marginBottom='2rem'>
        { data!.character.name }
      </Typography>

      <Card sx={{ display: 'flex', marginBottom: '1rem', position: 'relative' }} >
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={data?.character.image}
          alt={data?.character.name}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', height:'100%' }}>
            <FieldInfo fieldName="Status" fieldValue={data!.character.status || 'Unknown'} />
            <FieldInfo fieldName="Species" fieldValue={data!.character.species || 'Unknown'} />
            <FieldInfo fieldName="Gender" fieldValue={data!.character.gender || 'Unknown'} />
            <FieldInfo fieldName="Type" fieldValue={data!.character.type || 'Unknown'} />
            <FieldInfo fieldName="Created" fieldValue={new Date(data!.character.created).toLocaleDateString() || 'Unknown'} />

            <Typography 
              component="div" 
              variant="h6" 
              color="primary"
              marginTop='2rem' 
              sx={{ cursor: 'pointer' }} 
              onClick={handleCardClick}
            >
              { isFavorite ? 'Remove from favorite' :  'Add to favorite'}
            </Typography>

          </CardContent>
        </Box>
      </Card>
    </Box>
  )
}
