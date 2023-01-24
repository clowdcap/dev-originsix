import './footer.scss'

import LogoFooter from './../../assets/logo/logo-footer.svg'

import IconInsta from './../../assets/icons/instagram 1.svg'
import IconFace from './../../assets/icons/facebook 1.svg'
import IconYoutube from './../../assets/icons/youtube 1.svg'

export const Footer = () => {
    return (
        <footer>
            <div className="container__footer center">
                <div className="titulo__footer">
                    <div className="logo__footer">
                        <img src={LogoFooter} alt="Logo Footer" />
                    </div>
                    <div className="texto__footer">
                        <p>©2021 Beautysalon.</p>
                        <p>Todos os direitos reservados.</p>
                    </div>
                </div>
                <div className="social__footer">
                    <img src={IconInsta} alt="Icon Media Social" />
                    <img src={IconFace} alt="Icon Media Social" />
                    <img src={IconYoutube} alt="Icon Media Social" />
                </div>
            </div>
        </footer>
    )
}