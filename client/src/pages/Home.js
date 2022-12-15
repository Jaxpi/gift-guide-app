import React from 'react';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
// import WishListCardList from '../components/WishListCard';

import { QUERY_WISHLISTS, QUERY_ME } from '../utils/queries';
import WishListCard from '../components/WishListCard';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const queryMeResult = useQuery(QUERY_ME);
  const meLoading = queryMeResult.loading;
  const meData = queryMeResult.data;
  // get the id of the current user
  const owner = meData?.me._id;
  console.log('owner', owner);

  // get the array of wishlist that a user can see
  const queryWishlistsResult = useQuery(QUERY_WISHLISTS);
  const wishlistLoading = queryWishlistsResult.loading;
  const wishlistData = queryWishlistsResult.data;
  const wishlists = wishlistData?.wishlists || [];
  
  console.log('wishlists', wishlists)

  // map through the wishlists and add an owned property set to true if the userId and the owner value are the same
  const wishlistsToDisplay = wishlists.map(list => {
    if (list.userId === owner) {
      return {
        ...list,
        owner: true
      }
    }  else if(list.friends.includes(owner)) {
      return list;
    }
  }).filter(list => list !== undefined);
  console.log(wishlistsToDisplay)

  if (!Auth.loggedIn()){
  return <Navigate replace to="/login" />
  //this above is incorrect and needs to change (react router issue perhaps)
  }
  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {meLoading ? (
            <div>Loading...</div>
          ) : (
              <> {wishlistsToDisplay.map((wishlist, index) =>
                    < WishListCard key={index} wishlist={wishlist} cardNo={index} /> 
                )} 
              </> 
              )}
           </div>
      </div>
    </main>
  );
};

export default Home;