import React from 'react'

const UserList = ({data}) => {
  return (
    <div>
      { data.length!==0 ? (data.map((item)=>(
            <div key={item.id}>
                <ul>
                    <li>{item.name}</li>
                    <li>{item.age}</li>
                </ul>
            </div>
        ))) : (<p>No data found</p>)
        
      }
    </div>
  )
}

export default UserList
