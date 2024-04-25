import React from 'react'

const profileCardStyle = {
    backgrounColor: '#f0f0f0',
    padding: '10px',
    maxWidth: '600px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
}

const skillsStyle = {
    backgrounColor: '#333',
    color: 'white',
    borderRadius: '5px',
    padding: '5px 10px',
    margin: '5px'
}

const ProfileCard = ({candidate}) => {
    return (
        <div className='profile-card' style={{...profileCardStyle, textAlign: 'left', marginRight: '10px'}}>
            <h2 style={{marginBottom: '10px'}}>Role: {candidate.role}</h2>
            <p>Name: {candidate.name}</p>
            <p>Email: {candidate.email}</p>
            <div>
                <p style={{fontWeight: 'bold'}}>Skills:</p>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {candidate.skills.map((item, index) => (
                    <div key={index} style={skillsStyle}>
                        {item}
                    </div>             
                ))}
                </div>
            </div>
        </div>
    )
}

export default ProfileCard

// <div key={candidate.id} style={{...profileCardStyle, textAlign: 'left', marginRight: '10px'}}>
//                         <h2 style={{marginBottom: '10px'}}>Role: {candidate.role}</h2>
//                         <p>Name: {candidate.name}</p>
//                         <p>Email: {candidate.email}</p>
//                         <div>
//                             <p style={{fontWeight: 'bold'}}>Skills:</p>
//                             <div style={{display: 'flex', flexWrap: 'wrap'}}>
//                                 <div key={index} style={skillsStyle}>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>