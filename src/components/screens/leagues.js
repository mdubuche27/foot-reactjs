import React, { useEffect, useState } from 'react'
import { useHistory, Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import privatekey from '../secret/secret'
import axios from 'axios'

const Leagues = () => {
    const [league, setleague] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        const url = `https://apiv2.apifootball.com/?action=get_leagues&country_id=${id}&APIkey=${privatekey}`

        axios.get(url)
          .then(
            (result) => {
              console.log(result)
              setleague(result.data)
            },
            (error) => {
              console.log(error)
            }
          )
      }, [])

      const handleFavorite = (hero) => {
        //localStorage.removeItem('Favorite')
        const currentFavorite = localStorage.getItem('FavoriteLeague') ? JSON.parse(localStorage.getItem('FavoriteLeague')) : []
        const isPresent = currentFavorite.map(f => f.id).indexOf(hero.id)
        if(isPresent === -1){
          currentFavorite.push(hero)
        }
        else{
          currentFavorite.splice(isPresent, 1);
        }
        localStorage.setItem('FavoriteLeague', JSON.stringify(currentFavorite))
        console.log(localStorage.getItem('FavoriteLeague'))
      }


      return (
        <div>
          <p>Pays</p>
          {league.map(item => (
            <StyledLign>
              <Link to={"/league/" + item.league_id}>{item.league_name}</Link>
              <StyledBtn onClick={() => handleFavorite({ id: item.league_id, name: item.league_name})}>Add to favorite</StyledBtn>
            </StyledLign>
          ))}
        </div>
      );
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
export default Leagues