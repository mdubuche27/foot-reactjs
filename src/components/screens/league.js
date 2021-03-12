import React, { useEffect, useState } from 'react'
import { useHistory, Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import privatekey from '../secret/secret'
import axios from 'axios'

const League = () => {
    const [league, setLeague] = useState([]);
    const history = useHistory()
    const { id } = useParams()

    useEffect(() => {
        const url = `https://apiv2.apifootball.com/?action=get_teams&league_id=${id}&APIkey=${privatekey}`

        axios.get(url)
          .then(
            (result) => {
              console.log(result)
              setLeague(result.data)
            },
            (error) => {
              console.log(error)
              alert(error)
            }
          )
      }, [])

      const handleFavorite = (hero) => {
        //localStorage.removeItem('Favorite')
        const currentFavorite = localStorage.getItem('FavoriteClub') ? JSON.parse(localStorage.getItem('FavoriteClub')) : []
        const isPresent = currentFavorite.map(f => f.id).indexOf(hero.id)
        if(isPresent === -1){
          currentFavorite.push(hero)
        }
        else{
          currentFavorite.splice(isPresent, 1);
        }
        localStorage.setItem('FavoriteClub', JSON.stringify(currentFavorite))
        console.log(localStorage.getItem('FavoriteClub'))
      }

      return (
        <div>
        <p></p>
        <Link to={`/leaguecal/${id}`}>Calendrier</Link>
        {league.map(item => (
          <StyledLign>
            <Link to={"/club/" + id + "/" + item.team_key}>{item.team_name}</Link>
            <StyledBtn onClick={() => handleFavorite({idchamp: id, id: item.team_key, name: item.team_name})}>Add to favorite</StyledBtn>
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
export default League