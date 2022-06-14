import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from "@apollo/client";
import { CharacterPageResponse, CharacterPageVars } from '../interfaces/interfaces';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { setTotalPages, setCurrentPage } from '../actions/character';
import { CharacterCard } from '../components/CharacterCard';
import { SearchBar } from '../components/SearchBar';
import { Typography } from '@mui/material';
import { CHARACTERS_QUERY } from '../queries/queries';
import { ErrorMessage } from '../components/ErrorMessage';
import { useFavorites } from '../hooks/useFavorites';


export const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { currentPage, totalPages, searchText } = useSelector((state: RootState) => state.character)
  const { favorites } = useFavorites()

  const { loading, error, data, fetchMore } = useQuery<CharacterPageResponse, CharacterPageVars>(CHARACTERS_QUERY, { variables: { page: currentPage, name: searchText } });

  useEffect(() => {

    dispatch(setTotalPages(data?.characters.info.pages || 0))
  
    return () => {}
  }, [data, dispatch])
  
  useEffect(() => {

    fetchMore({ variables:{ name: searchText} })

  }, [searchText, fetchMore])

  const handlePageChange = (page: number) => {
    if (page > totalPages)
      return

    dispatch(setCurrentPage(page))

    fetchMore({ variables: { page: page  } })

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (error)
    return (
      <ErrorMessage error={error?.message} />
    )

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography component="div" variant="h2" marginBottom='2rem'>
        Search for your favorite characters
      </Typography>
      
      <SearchBar />

      {
        loading ?
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            <CircularProgress />
          </Box>
          :
          <Box marginTop='1rem'>
            {data?.characters.results.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                isFavorite={favorites.findIndex(c => c.id === character.id) !== -1}
              />
            ))}
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <Pagination
                count={data?.characters.info.pages}
                page={currentPage} 
                color="primary" 
                onChange={ (_, p) => handlePageChange(p) }
              />
            </Box>
          </Box>
      }
    </Box>
  )
}
