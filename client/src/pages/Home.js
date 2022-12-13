import React from 'react';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import WishListCardList from '../components/WishListCard';

import { QUERY_WISHLISTS } from '../utils/queries';
import WishListCard from '../components/WishListCard';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const { loading, data } = useQuery(QUERY_WISHLISTS);
  const wishlists = data?.wishlists || [];
  if (!Auth.loggedIn()){
  return <Navigate replace to="/login" />
  }
  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <WishListCard
              wishlists={wishlists}
              title="Here's the current roster of friends..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;