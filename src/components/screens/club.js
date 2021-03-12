import React, { useEffect, useState } from 'react'
import { useHistory, Link, useParams } from 'react-router-dom'
import privatekey from '../secret/secret'
import styled from 'styled-components'
import axios from 'axios'

const Club = () => {
    const [team, setTeam] = useState([]);
    const history = useHistory()
    const { id, key } = useParams()

    useEffect(() => {
        const url = `https://apiv2.apifootball.com/?action=get_teams&league_id=${id}&APIkey=${privatekey}`

        axios.get(url)
          .then(
            (result) => {
              const t = result.data.filter(team => team.team_key === key)
              console.log(t)
              setTeam(t)
            },
            (error) => {
              console.log(error)
              alert(error)
            }
          )
      }, [])

      return (
        <div>
            {team.length !== 0 ? (        
                <div>
                    {console.log(team)}
                    <p>Liste joueurs</p>
                    <Link to={`/clubcal/${id}/${team[0]?.team_name}`}>{team[0]?.team_name}</Link>
                    {team[0]?.players.map(player => (
                      <StyledLign>
                        <p>{player.player_name}</p>
                      </StyledLign>
                    ))}
                </div>) : 
                (<div>
                    <p>Chargement...</p>
                </div>)
                }
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
export default Club