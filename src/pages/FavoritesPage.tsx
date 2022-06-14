import { Box, Typography } from "@mui/material"
import { CharacterCard } from "../components/CharacterCard"
import { useFavorites } from '../hooks/useFavorites';

export const FavoritesPage = () => {
  
  const { favorites } = useFavorites()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography component="div" variant="h2" marginBottom='2rem'>
        Favorites
      </Typography>

      {
        favorites.length === 0
        ? <Typography component="div" variant="h5" marginBottom='1rem'>
            No favorites yet
          </Typography>
        : favorites.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isFavorite={true}
            />
          ))
      }
    </Box>
  )
}
