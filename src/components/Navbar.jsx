import React from 'react'
import Button from './Button'

import '../static/css/navbar.css'

import m_png from '../static/images/m.png'
import app_png from '../static/images/app.png'
import git_png from '../static/images/git.png'



function Navbar() {
	return (
		<nav>
			<button className='logo-button'>
				<img className='logo' src={m_png}></img>
			</button>
			<div className='nav-item'>
				<Button text="Git" image_path={git_png} />
				<Button text="Apps" image_path={app_png} />
			</div>
		</nav>
	)
}

export default Navbar