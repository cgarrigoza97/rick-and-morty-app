import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from 'react-redux';
import { CharacterPageItemResult } from '../interfaces/interfaces';
import { addToFavorites, removeFromFavorites } from '../actions/character';
import { useNavigate } from 'react-router-dom';

interface Props {
  character: CharacterPageItemResult
  isFavorite?: boolean;
}

export const CharacterCard = ({ character, isFavorite } : Props) => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFavoriteIconClick = () => {
    if (!isFavorite)
      dispatch(addToFavorites(character));
    else 
      dispatch(removeFromFavorites(character));
  }

  const handleCardClick = (id: string) => {
    navigate(`/character/${id}`)
  }

  return (
    <Card sx={{ display: 'flex', marginBottom: '1rem', position: 'relative' }} >
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={character.image}
        alt={character.name}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', height:'100%' }}>
          <Typography component="div" variant="h5">
            {character.name}
          </Typography>

          <Typography 
            component="div" 
            variant="h6" 
            marginTop='auto' 
            color="primary" 
            sx={{ cursor: 'pointer' }} 
            onClick={() => handleCardClick(character.id)}
          >
            View more
          </Typography>

          <IconButton 
            aria-label="add to favorites" 
            sx={{ position: 'absolute', top: '1rem', right: '1rem' }}
            onClick={handleFavoriteIconClick}
          >
            { isFavorite ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
        </CardContent>
      </Box>
    </Card>
  )
}
