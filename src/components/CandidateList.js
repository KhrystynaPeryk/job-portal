import React, {useState, useEffect} from 'react'
import ProfileCard from './ProfileCard'
import NavBar from './NavBar'

const searchContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
    textAlign: 'center'
}

const searchBoxContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
}

const searchBoxStyle = {
    flex: 1,
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginRight: '10px'
}

const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px'
}

const searchButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#525252',
    color: 'white',
    border: 'none'
}

const listAllButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#525252',
    color: 'white',
    border: 'none'
}

const CandidateList = () => {

    const [searchText, setSearchText] = useState('')
    const [filteredCandidates, setFilteredCandidates] = useState('')
    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        const storedCandidates = localStorage.getItem('candidates')
        if (storedCandidates) {
            //implement here
        }
    }, [])

    const handleSearch = () => {
        //implement here
    }

    const handleListAll = () => {
        //implement here
    }

    return (
        <div style={{...searchContainerStyle, alignItems: 'center'}}>
            <NavBar />
            <div style={searchBoxContainerStyle}>
                <input
                    type='text'
                    placeholder='search skills'
                    value=''
                    style={searchBoxStyle}
                    //implement here
                />
                <button style={searchButtonStyle}>Search Button</button>
                <button style={listAllButtonStyle}>List All</button>
            </div>
            {filteredCandidates.length === 0 ? (
                //implement here
                console.log()
            ) : (
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                    <ProfileCard />
                </div>    
            )}
        </div>
    )
}

export default CandidateList