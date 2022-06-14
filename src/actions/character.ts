import { CharacterAction } from '../reducer/characterReducer';
import { CharacterPageItemResult } from '../interfaces/interfaces';

export const setSearchText = (searchText: string): CharacterAction => ({
  type: 'setSearchText',
  payload: searchText,
})

export const setTotalPages = (totalPages: number) : CharacterAction => ({
  payload: totalPages,
  type: 'totalPages',
})

export const setCurrentPage = (currentPage: number) : CharacterAction => ({
  payload: currentPage,
  type: 'changePage',
})

export const addToFavorites = (character: CharacterPageItemResult) : CharacterAction => ({
  payload: character,
  type: 'addToFavorites',
})

export const removeFromFavorites = (character: CharacterPageItemResult) : CharacterAction => ({
  payload: character,
  type: 'removeFromFavorites',
})
