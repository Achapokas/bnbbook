import React from 'react'
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const RESTAURANT_LIST = gql`
      {
        restaurants {
          id
          name
        }
      }
`;

const RestaurantList = () => {
    const {loading, error, data} = useQuery(RESTAURANT_LIST);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    return data.restaurants.map(({id, name}) => <p key={id}>{name}</p>)
}

export default RestaurantList;