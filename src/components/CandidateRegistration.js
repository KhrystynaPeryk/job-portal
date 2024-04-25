import React, {useEffect, useState} from 'react'
import NavBar from './NavBar'

const alertMessage = {
    marginTop: '5px'
}

const highLight = {
    border: '2px solid red',
    backgroundColor: 'red'
}

const centerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '50vh',
    textAlign: 'center'
}

const addSkillButtonStyle = {
    backgroundColor: '#525252',
    border: '2px solid #333',
    color: 'white',
    borderRadius: '5px',
    marginLeft: '10px',
    cursor: 'pointer'
}

const formBoxStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    backgroundColor: '#f5f5f5'
}

const formGroupStyle = {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center'
}

const sharpEdgeButtonStyle = {
    backgroundColor: '#525252',
    border: '1px solid #333',
    padding: '10px 20px',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px'
}

const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
}
const skillTagStyle = {
    backgroundColor: '#333',
    color: 'white',
    borderRadius: '0',
    padding: '5px 10px',
    margin: '0 5px'
}

const buttonGroupStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px'
}

const CandidateRegistration = () => {
    const [formdata, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        skill: '',
        skills: []
    })

    const [registrationStatus, setRegitrationStatus] = useState(null)
    const [candidates, setCandidates ] = useState([])
    const highlightInput = true

    const handleAddSkill = () => {

    }

    const handleFormSubmit = () => {
        
    }

    const handleReset = () => {
        
    }
    return (
        <div style={centerContainerStyle}>
            <NavBar />
            <div style={formBoxStyle}>
                <div style={formBoxStyle}>
                    <form onSubmit={handleFormSubmit} >
                        <div style={formGroupStyle}>
                            <input
                                type='text'
                                name='name'
                                value={formdata.name}
                                style={inputStyle}
                                placeholder='Name'
                                required
                                // onChange={(e) => setFormData(prevData => {...prevData, e.target.value})}
                            />
                        </div>
                        <div style={formGroupStyle}>
                            <input
                                type='text'
                                name='email'
                                value={formdata.email}
                                style={{...inputStyle, ...(highlightInput ? highLight : {})}}
                                placeholder='Email'
                                required
                                // onChange={(e) => setFormData(prevData => {...prevData, e.target.value})}
                            />
                        </div>
                        <div style={formGroupStyle}>
                            <input
                                type='text'
                                name='role'
                                value={formdata.role}
                                style={inputStyle}
                                placeholder='Role'
                                required
                                // onChange={(e) => setFormData(prevData => {...prevData, e.target.value})}
                            />
                        </div>
                        <div style={formGroupStyle}>
                            <input
                                type='text'
                                name='skill'
                                value={formdata.skill}
                                style={inputStyle}
                                placeholder='Skill'
                                required
                                // onChange={(e) => setFormData(prevData => {...prevData, e.target.value})}
                            />
                            <button style={addSkillButtonStyle} type='button'>
                                Add Skill
                            </button>
                        </div>
                        <div>
                            {formdata.skills.map((skill, index) => (
                                <span style={skillTagStyle}></span>
                            ))}
                        </div>
                        <div style={buttonGroupStyle}>
                            <button type='submit' style={sharpEdgeButtonStyle}>Register</button>
                            <button type='button' style={sharpEdgeButtonStyle}>Reset</button>
                        </div>
                    </form>
                    {registrationStatus && (
                        // implement this
                        console.log(registrationStatus)
                    )}
                </div>
            </div>
        </div>
    )
}

export default CandidateRegistration