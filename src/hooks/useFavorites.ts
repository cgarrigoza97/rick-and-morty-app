import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect } from 'react';
import { CharacterPageItemResult } from '../interfaces/interfaces';

export const useFavorites = (): { favorites: CharacterPageItemResult[] } => {
  const { favorites } = useSelector((state: RootState) => state.character)

  useEffect(() => {

    localStorage.setItem('favorites', JSON.stringify(favorites));

  }, [favorites])

  return {favorites}
}