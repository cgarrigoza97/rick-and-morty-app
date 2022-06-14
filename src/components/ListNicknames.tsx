import { useState, useEffect } from 'react';

interface Props {
  names: string[];
  order: 'ASC' | 'DESC';
}

interface ItemToRender {
  id: number;
  name: string;
}

export const ListNicknames = ({ names, order }: Props) => {

  const [itemsToRender, setItemsToRender] = useState<ItemToRender[]>([]);

  useEffect(() => {

    let itemsToRender = names.map((name, index) => ({
      id: index,
      name
    }))

    setItemsToRender(itemsToRender)

  }, [names])

  useEffect(() => {
      
      if (order === 'ASC') {
        setItemsToRender(items => [...items].sort((a,b) => a.name > b.name ? 1 : -1));
      }
      else {
        setItemsToRender(items => [...items].sort((a,b) => a.name < b.name ? 1 : -1));
      }

  }, [order, names])

  return (
    <ul>
      {
        itemsToRender.map(item =>
          <li key={item.id}>{item.name}</li>
        )
      }
    </ul>
  )
}