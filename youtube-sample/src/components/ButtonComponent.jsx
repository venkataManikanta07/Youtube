import React from 'react'

const ButtonComponent = ({name}) => {
  return (
    <div>
        <button className='m-1 mx-2 w-auto p-2 bg-gray-200 border rounded-sm'>{name}</button>
    </div>
  )
}

export default ButtonComponent