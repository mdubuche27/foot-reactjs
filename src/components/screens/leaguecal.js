import React, { useEffect, useState } from 'react'
import { useHistory, Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import addDaysToDate from '../utils/utils'
import privatekey from '../secret/secret'
import axios from 'axios'

const LeagueCal = () => {
    const [team, setTeam] = useState([]);
    const [calendar, setCalendar] = useState([]);
    const history = useHistory()
    const { id, name } = useParams()

    useEffect(() => {
        const today = new Date().toJSON().slice(0,10);
        const oneMonth = addDaysToDate(today, 30).toJSON().slice(0,10);

        const url = `https://apiv2.apifootball.com/?action=get_events&from=${today}&to=${oneMonth}&league_id=${id}&APIkey=${privatekey}`

        axios.get(url)
        .then(
            (result) => {
                setCalendar(result.data)
            },
            (error) => {
              console.log(error)
              alert(error)
            }
        )

      }, [])

      return (
        <div>
            <p>Liste match</p>
            {console.log(calendar)}

            {calendar.map(item => (
                <StyledLign>
                    <p>{item.match_awayteam_name} vs {item.match_hometeam_name}</p>
                    <p>Jour du match : {item.match_date}</p>
                </StyledLign>
            ))
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
export default LeagueCal