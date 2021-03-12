import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import imgfleche from '../../img/fleche2.png'
import styled from 'styled-components'

const Header = () => {
    const [token, setToken] = useState(localStorage.getItem('token'))

    const Logout = () => {
        localStorage.removeItem('token')
        window.location.reload();
      }

      return (
        <StyledHeader> 
            <Link to ="/"><StyledImg src={imgfleche} alt="return"></StyledImg></Link>
            <span>App Foot</span>
            {!token ? (<StyledDivRight><Link to="/login">Login</Link></StyledDivRight>)
            : (<StyledDivRight><button onClick={() => Logout()}>logout</button></StyledDivRight>)}
        </StyledHeader>
      );
    }

const StyledImg = styled.img`
    float: left;
    height: 20px;
    width: 20px;
`

const StyledDivRight = styled.div`
    float: right;
`

const StyledHeader = styled.div`
    text-align: center;
    background-color: green;
    height: 30px;
    border-style: none none groove none;
`

export default Header