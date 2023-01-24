import './../../App.scss'
import './header.scss'

import Logo from './../../assets/logo/logo-header.svg'
import Menu from './../../assets/icons/menu.svg'
import Close from './../../assets/icons/close.svg'
import { useState } from 'react'

export const Header = () => {

    const [menuVisible, setMenuVisible] = useState(false)

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <header>
            <div className="container__header center">
                
                <div className="logo__header">
                    <img src={Logo} alt="Logo do Site" />
                </div>

                <nav className={menuVisible ? 'nav__mobile' : 'nav__header'}>

                    <ul className='lista__nav__header'>

                        <li className='active'><a href="#home" onClick={() => setMenuVisible(false)} >Inicio</a></li>
                        <li><a href="#sobre" onClick={() => setMenuVisible(false)}>Sobre</a></li>
                        <li><a href="#servicos" onClick={() => setMenuVisible(false)}>Serviços</a></li>
                        <li><a href="#depoimento" onClick={() => setMenuVisible(false)}>Depoimentos</a></li>
                        <li><a href="#contato" onClick={() => setMenuVisible(false)}>Contato</a></li>
                        
                    </ul>
                </nav>

                <div className="mobile"
                    onClick={toggleMenu}>
                    <img src={menuVisible? Close : Menu} alt="Menu Mobile" />
                </div>

     
            </div>
        </header>
    )
}