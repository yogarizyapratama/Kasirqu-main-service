import React from 'react'

const ProgressBar = () => {
    return (
        <div>
            <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                <div className="h-1 bg-blue-400" style={{ width: '45%' }}></div>
            </div>
        </div>
    )
}

export default ProgressBar