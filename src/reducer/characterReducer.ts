import { CharacterState, CharacterPageItemResult } from '../interfaces/interfaces';

export type CharacterAction = 
  | { type: 'changePage'; payload: number }
  | { type: 'totalPages'; payload: number }
  | { type: 'setSearchText'; payload: string }
  | { type: 'addToFavorites'; payload: CharacterPageItemResult }
  | { type: 'removeFromFavorites'; payload: CharacterPageItemResult }

const savedFavorites = localStorage.getItem('favorites')

const initialState: CharacterState = {
  currentPage: 1,
  favorites: savedFavorites ? JSON.parse(savedFavorites) : [],
  searchText: "",
  totalPages: 0,
}

export const characterReducer = (state =  initialState, action: CharacterAction): CharacterState => {
  switch (action.type) {
    case 'totalPages':
      return {
        ...state,
        totalPages: action.payload,
      }

    case 'changePage':
      return {
        ...state,
        currentPage: action.payload,
      }

    case 'setSearchText':
      return {
        ...state,
        searchText: action.payload,
      }

    case 'addToFavorites':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }

    case 'removeFromFavorites':
      return {
        ...state,
        favorites: state.favorites.filter(character => character.id !== action.payload.id),
      }

    default:
      return state;
  }

}