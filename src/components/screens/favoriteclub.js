import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const FavoriteClub = () => {
    const [fav, setFav] = useState(JSON.parse(localStorage.getItem('FavoriteClub')))

    const RemoveFavorite = (id) => {
        const currentFavorite = localStorage.getItem('FavoriteClub') ? JSON.parse(localStorage.getItem('FavoriteClub')) : []
        const newcurrentFavorite = currentFavorite.filter(fav => fav.id !== id)
        localStorage.setItem('FavoriteClub', JSON.stringify(newcurrentFavorite))
        window.location.reload();
      }

  return (
    <div>
        <p>Favorite</p>
            {fav.map(club => (
                <StyledLign>
                    <Link to={`/club/${club.idchamp}/${club.id}`}>{club.name}</Link>
                    <StyledBtn onClick={() => RemoveFavorite(club.id)}>Remove to favorite</StyledBtn>
                </StyledLign>
            ))}
    </div>
  )
}

const StyledLign = styled.div`
    display: flex;
    margin-left: 25%;
    margin-right: 5%;
    background-color: white;
    border: solid #32a1ce;
    align-items: center;
    justify-content: center;
`

const StyledBtn = styled.button`
    float: right;
    margin: 2px;
    background-color: white;
    color: black;
    border: 2px solid green;
    border-radius: 5px;

    &:hover {
        background-color: green;
    }
`
export default FavoriteClub