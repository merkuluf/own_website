import React, { memo } from 'react'
import Button from './Button'

import '../static/css/navbar.css'
import images from '../utils/images'

import useRedirect from '../hooks/useRedirect'

function Navbar() {
    const redirect = useRedirect()

    return (
        <nav>
            <button onClick={() => redirect('/')} className='logo-button'>
                <img className='logo' src={images.m_png}></img>
            </button>
            <div className='nav-item'>
                <Button
                    onClick={() => redirect('https://github.com/merkuluf')}
                    text='Git'
                    image_path={images.git_png}
                />
                {/* <Button text="Apps" image_path={images.app_png} /> */}
            </div>
        </nav>
    )
}

export default memo(Navbar)
