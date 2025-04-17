import React from 'react'

const MissionKey = () => {
  return (
    <div className="my-3"> {/* Add vertical margin (top and bottom) */}

        <p> {/* Green background box with Success label */}
            <span className="px-3 mr-2 bg-success" /> &nbsp;= Success
        </p>

        <p> {/* Red background box with Fail label */}
            <span className="px-3 mr-2 bg-danger" /> &nbsp;= Fail
        </p>
        
    </div>
  )
}

export default MissionKey