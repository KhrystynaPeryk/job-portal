import React, {useState, useEffect} from 'react'
import ProfileCard from './ProfileCard'
import NavBar from './NavBar'

const searchContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
    const [filteredCandidates, setFilteredCandidates] = useState([])
    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        const storedCandidates = JSON.parse(localStorage.getItem('candidates'));
        if (storedCandidates) {
            setCandidates(storedCandidates)
        }
    }, [])

    const handleSearch = () => {
        setFilteredCandidates([])
        candidates.forEach((item) => {
            const fileteredArray = item.skills.filter(skill => skill.toLowerCase() === searchText.toLowerCase())
            if (fileteredArray.length > 0) {
                setFilteredCandidates(prevState => [...prevState, item])
            }
        })
    }

    const handleListAll = () => {
        setFilteredCandidates([])
    }

    return (
        <div style={searchContainerStyle}>
            <NavBar />
            <div style={searchBoxContainerStyle}>
                <input
                    type='text'
                    placeholder='search skills'
                    value={searchText}
                    style={searchBoxStyle}
                    data-testid='search-input'
                    onChange={(e) => {setSearchText(e.target.value)}}
                />
                <button style={searchButtonStyle} onClick={handleSearch}>Search Button</button>
                <button style={listAllButtonStyle} data-testid='search-all' onClick={handleListAll}>List All</button>
            </div>
            <div>
                <h2>Number of profiles: 
                    <span data-testid='profiles-found-tag'> 
                        {filteredCandidates.length === 0 ? ` ${candidates.length}` : ` ${filteredCandidates.length}` }
                    </span>
                </h2>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
            {filteredCandidates.length === 0 ? (
                candidates.map((item) => <div key={item.email}><ProfileCard candidate={item}/></div>)
            ) : (
                filteredCandidates.map((item) => <div key={item.email}><ProfileCard candidate={item}/></div>)
            )}
            </div> 
        </div>
    )
}

export default CandidateList