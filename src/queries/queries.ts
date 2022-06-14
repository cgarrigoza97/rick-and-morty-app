import { gql } from "@apollo/client";

export const CHARACTERS_QUERY = gql`
query Characters($page: Int!, $name: String!) {
  characters(page: $page, filter: { name: $name }) {
    info {
      count,
      pages
    }
    results {
      id, 
      name,
      image
    }
  }
}
`;

export const CHARACTER_QUERY = gql`
query Character($id: ID!) {
  character(id: $id) {
    name,
    status,
    species,
    type,
    gender,
    image,
   	created
  }
}
  `;

