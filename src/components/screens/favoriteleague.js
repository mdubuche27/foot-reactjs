import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const FavoriteClub = () => {
    const [fav, setFav] = useState(JSON.parse(localStorage.getItem('FavoriteLeague')))

    const RemoveFavorite = (id) => {
        const currentFavorite = localStorage.getItem('FavoriteLeague') ? JSON.parse(localStorage.getItem('FavoriteLeague')) : []
        const newcurrentFavorite = currentFavorite.filter(fav => fav.id !== id)
        localStorage.setItem('FavoriteLeague', JSON.stringify(newcurrentFavorite))
        window.location.reload();
      }

  return (
    <div>
        <p>Favorite</p>
            {fav.map(league => (
                <StyledLign>
                    <Link to={`/league/${league.id}`}>{league.name}</Link>
                    <StyledBtn onClick={() => RemoveFavorite(league.id)}>Remove to favorite</StyledBtn>
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