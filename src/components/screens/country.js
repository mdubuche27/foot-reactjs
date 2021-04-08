import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import styled from 'styled-components'
import privatekey from '../secret/secret'
import axios from 'axios'

const Country = () => {
    const [items, setItems] = useState([]);
    const history = useHistory()
    useEffect(() => {
        const url = `https://apiv2.apifootball.com/?action=get_countries&APIkey=${privatekey}`

        axios.get(url)
          .then(
            (result) => {
              console.log(result)
              setItems(result.data)
            },
            (error) => {
              console.log(error)
            }
          )
      }, [])

      return (
        <div>
          <p>Pays</p>
          {console.log(items)}
          alert(" ")
          {items.map(item => (
            <StyledLign>
              <Link to={"/leagues/" + item.country_id}>{item.country_name}</Link>
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

export default Country