import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const homeStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30vh',
    textAlign: 'center'
}

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '500px',
    margin: '20px'
}

const buttonStyle = {
    testDecoration: 'none',
    color: '#fff',
    backgroundColor: '#525252',
    padding: '10px 20px',
    borderRadius: '5px',
    marginRight: '10px'
}

const Home = () => {
    return (
        <div style={homeStyle}>
            <NavBar />
            <div style={buttonContainerStyle}>
                <button style={buttonStyle}>
                </button>
                <button style={buttonStyle}>
                </button>
            </div>
        </div>
    )
}

export default Home