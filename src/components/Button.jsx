import React from 'react'

import '../static/css/button.css'



function Button({ text, image_path, onClick, id, reverse, className }) {
	return (
		<button id={id} onClick={onClick} className={`main-button ${className}`}>
			{!reverse && <img className='button-icon' src={image_path}></img>}
			<p className='button-text'>{text}</p>
			{reverse && <img className='button-icon' src={image_path}></img>}
		</button>
	)
}

export default Button;