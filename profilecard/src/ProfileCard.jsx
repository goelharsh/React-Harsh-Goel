import React from 'react'

const ProfileCard = ({name, age, bio}) => {
  return (
    <div>
      <div>
        <p>{name}</p>
        <p>{age}</p>
        <div>
            <p>{bio}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
