import React from 'react'
import ProgressBar from './ProgressBar'

const Header = () => {
    return (
        <div className='sticky top-0'>
            <div className='flex justify-between px-4 py-4 bg-white text-black'>
                <h2>Dashboard</h2>
                <h2>Welcome back, client</h2>
            </div>
            <div>
                <ProgressBar />
            </div>
        </div>
    )
}

export default Header