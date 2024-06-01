import React, { useEffect, useState } from 'react'

const UseFavItems = () => {
    const [favouriteItems, setFavouriteItems] = useState(() => {
        const savedItems = localStorage.getItem('favItems');
        return savedItems ? JSON.parse(savedItems) : [];
    })
    
    useEffect(() => {
        localStorage.setItem('favItems', JSON.stringify(favouriteItems))
    }, [favouriteItems])

    const addFavItems = (item) => {
        setFavouriteItems((prevItems) => [...prevItems, itemcd [rp]])
    }

    const removeFavItems = (item) => {
        setFavouriteItems((prevItems) => {
            prevItems.filter((favItem) => favItem.id !== item.id)
        })
    }

    const isFavourite = (item) => favouriteItems.some((favItem) => favItem.id === item.id);

    return { favouriteItems, addFavItems, removeFavItems, isFavourite };
}

export default UseFavItems