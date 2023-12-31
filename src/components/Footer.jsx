import React from 'react'
import '../static/css/footer.css'
import Button from './Button'
import tg_png from '../static/images/tg.png'
import linkedin_png from '../static/images/linkedin.png'
import { useNavigate } from 'react-router-dom'

function Footer() {

    const handleRedirect = (e) => {
        window.location.href = e.target.id
    }
    
    return (
        <footer>
            <Button 
                id="https://t.me/merkuluf" 
                image_path={tg_png} 
                text="Telegram" 
                onClick={handleRedirect}
            />
            <Button 
                id="https://www.linkedin.com/in/maksim-merkulov-a6141b209/" 
                image_path={linkedin_png} 
                text="Linked In" 
                onClick={handleRedirect}
            />
        </footer>
    )
}

export default Footer