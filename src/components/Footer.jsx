import React, {memo} from 'react'
import '../static/css/footer.css'
import Button from './Button'
import tg_png from '../static/images/tg.png'
import linkedin_png from '../static/images/linkedin.png'
import useRedirect from '../hooks/useRedirect'


function Footer() {

    const redirect = useRedirect()
    
    return (
        <footer>
            <Button 
                image_path={tg_png} 
                text="Telegram" 
                onClick={() => redirect("https://t.me/merkuluf")}
            />
            <p className='footer-text'>Programming since 2022</p>
            <Button 
                image_path={linkedin_png} 
                text="Linked In" 
                onClick={() => redirect("https://www.linkedin.com/in/maksim-merkulov-a6141b209/")}
            />
        </footer>
    )
}

export default memo(Footer);