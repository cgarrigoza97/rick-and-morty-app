export interface CharacterPageResponse {
  characters: CharacterPage;
}

export interface CharacterResponse {
  character: CharacterResult;
}

export interface CharacterPageVars {
  page: number;
  name: string;
}

export interface CharacterVars {
  id: string;
}

export interface CharacterPage {
  info: CharactersPageInfo;
  results: CharacterPageItemResult[];
}

export interface CharactersPageInfo {
  count: number;
  pages: number;
}

export interface CharacterPageItemResult {
  id: string;
  name: string;
  image: string;
}

export interface CharacterResult {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created: string;
}

export interface CharacterState {
  favorites: CharacterPageItemResult[];
  searchText: string;
  totalPages: number;
  currentPage: number;
}