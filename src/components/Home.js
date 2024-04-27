import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const homeStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30vh',
    textAlign: 'center',
    backgroundColor: 'white',
}

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '500px',
    margin: '20px'
}

const buttonStyle = {
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#525252',
    padding: '10px 20px',
    borderRadius: '5px',
    marginRight: '10px'
}

const Home = () => {
    const navigateTo = useNavigate()
    return (
        <div style={homeStyle}>
            <NavBar />
            <div style={buttonContainerStyle}>
                <button style={buttonStyle} data-testid='registration-btn' onClick={() => navigateTo('/candidate/registration')}>Candidate Registration</button>
                <button style={buttonStyle} data-testid='list-btn' onClick={() => navigateTo('/candidate/list')}>Candidate List</button>
            </div>
        </div>
    )
}

export default Home