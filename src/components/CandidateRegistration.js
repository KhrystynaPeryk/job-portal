import React, {useState} from 'react'
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
    const [candidates, setCandidates ] = useState(JSON.parse(localStorage.getItem('candidates')))
    const highlightInput = true

    const handleAddSkill = () => {
        //maximum 5 skills to be added
        if (formdata.skills.length < 5) {
            setFormData((prevState) => ({
                ...prevState,
                // checking if a skill string is not empty
                skills: prevState.skill.trim() === '' ? [...prevState.skills] : [...prevState.skills, prevState.skill],
                // skill: ''
            }))
        }
        console.log('Add Skill Button fired')
    }
    // validates input text BEFORE submit - returns true or false to disable the Submit ||||| it should not be empty string, it should contain only letters, numbers and spaces
    const validateText = (text) => {
        return /^[A-Za-z0-9][A-Za-z0-9 _]*[A-Za-z0-9]$|^[A-Za-z0-9]$/.test(text);
    }
    // validates input email BEFORE submit - returns true or false to disable the Submit 
    const validateEmail = (email) => {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    }

    const handleFormSubmit = (e) => {
        console.log('submit start')
        e.preventDefault()
        
        console.log(formdata)

        //get 'candidates' from localStorage
        const localStorageCandidates = JSON.parse(localStorage.getItem('candidates'));
        //check if 'candidates' are in localStorage
        if (localStorageCandidates) {
            //check if email is unique
            const existingEmail = localStorageCandidates.find(item => item.email === formdata.email)
            if (existingEmail) {
                //alerMessage
                setRegitrationStatus('Email already exists')
                console.log('email exists')
            } else {
                // update candidates in LocalStore and useState
                localStorage.setItem('candidates', JSON.stringify([...localStorageCandidates, formdata]));
                setCandidates((prevState) => [...prevState, formdata])
                //success message
                setRegitrationStatus('You have been registered successfully')
            }
        } else {
            console.log('no candidates in localStorage')
            // set new candidates in LocalStore and useState
            localStorage.setItem('candidates', JSON.stringify([formdata]));
            setCandidates((prevState) => [...prevState, formdata])
            setRegitrationStatus('You have been registered successfully')
        }
        console.log('submit end')
    }

    const handleReset = () => {
        setFormData({
            name: '',
            email: '',
            role: '',
            skill: '',
            skills: []
        })
        setRegitrationStatus(null)
    }
    return (
        <div style={centerContainerStyle}>
            <NavBar candidateCount={candidates.length} />
            <div style={formBoxStyle}>
                <div style={formBoxStyle}>
                    <form onSubmit={handleFormSubmit} data-testid='registration-form'>
                        <div style={formGroupStyle}>
                            <input
                                type='text'
                                name='name'
                                value={formdata.name}
                                style={inputStyle}
                                placeholder='Name'
                                required
                                onChange={(e) => setFormData({...formdata, name: e.target.value})}
                                data-testid='form-input-name'
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
                                onChange={(e) => setFormData({...formdata, email: e.target.value})}
                                data-testid='form-input-email'
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
                                onChange={(e) => setFormData({...formdata, role: e.target.value})}
                                data-testid='form-input-role'
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
                                onChange={(e) => {setFormData({...formdata, skill: e.target.value})}}
                                data-testid='form-input-skill'
                            />
                            <button 
                                style={addSkillButtonStyle} 
                                type='button' 
                                data-testid='add-btn' 
                                onClick={handleAddSkill} 
                                // disable Add Skill button once the input is empty OR skills array has 5 items
                                disabled={formdata.skill.trim() === '' || formdata.skills.length === 5 ? true : false}
                            >
                                Add Skill
                            </button>
                        </div>
                        <div>
                            {formdata.skills.map((skill, index) => (
                                <span style={skillTagStyle} data-testid='skill-tag' key={index}>{skill}</span>
                            ))}
                        </div>
                        <div style={buttonGroupStyle}>
                            <button 
                                type='submit' 
                                style={sharpEdgeButtonStyle} 
                                data-testid='submit-btn'
                                // if no VALID email/name/role/skills OR they are empty - disable Submit
                                disabled={(validateText(formdata.name) && validateEmail(formdata.email) && validateText(formdata.role) && formdata.skills.length > 0) ? false : true}
                            >
                                Register
                            </button>
                            <button type='button' style={sharpEdgeButtonStyle} onClick={handleReset} data-testid='reset-btn'>Reset</button>
                        </div>
                    </form>
                    {registrationStatus && (
                        // implement this data-testid='alertMessage'
                        <div style={alertMessage} data-testid='alertMessage'>{registrationStatus}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CandidateRegistration