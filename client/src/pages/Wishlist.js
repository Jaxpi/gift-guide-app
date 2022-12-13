import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_WISHLISTS } from "../utils/queries";
import WishListCard from "../components/WishListCard";


const WishLists = () => {

    // const [lists, setLists] = useState([]);
    const { error, loading, data } = useQuery(QUERY_WISHLISTS);
    const wishlists = data?.wishlists || [];
    // const wishlists = data?.wishlists || {};

    return (
    
        <div className="wish-lists">
            { loading ? ( <div> Loading ... </div> ) 
                : 
            // <WishListCard userWishlists={wishlists} />
            (<> {wishlists.map((wishlist, index) => < WishListCard key={index} wishlist={wishlist} /> )} </>)
        }           
        </div>
    );
};

// ( <p>{wishlists.title}</p> )    
export default WishLists;