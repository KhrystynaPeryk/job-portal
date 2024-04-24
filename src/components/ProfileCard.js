import React from 'react'

const ProfileCard = ({candidate}) => {
    return (
        <div className={profileCardStyle}>
            <h2>{candidate.name}</h2>
            <p>Role: {candidate.role}</p>
            <p>Skills: {candidate.skills.join(', ')}</p>
        </div>
    )
}

export default ProfileCard