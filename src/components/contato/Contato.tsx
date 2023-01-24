import './contato.scss'

import { TituloComponent } from "../TituloComponent/TituloComponent"

import IconeWhats from './../../assets/icons/whatsappbtn.svg'
import IconeTel from './../../assets/icons/phone.svg'
import IconeEnd from './../../assets/icons/map-pin.svg'
import IconeMail from './../../assets/icons/mail.svg'

export const Contato = () => {
    return (
        <section id='contato' className="contato primary">
            <div className="container__contato center">
                <div className="titulo__contato">
                    <TituloComponent
                        title="Entre em contato com a gente!"
                        subtitle="Entre em contato com a Beautysalon, 
                        queremos tirar suas dúvidas, ouvir suas críticas e sugestões."
                        btnText="Entrar em contato" 
                        icon={IconeWhats}
                        urlBtn="https://api.whatsapp.com/send?phone=5541992725388&text=Ol%C3%A1%20gostaria%20de%20contratar%20os%20seu%20servico"/>
                </div>

                <div className="lista__contato">
                    <ul>
                        <li>
                            <img src={IconeTel} alt="Tel Icon" />
                            <span>41 99272-5388</span>
                        </li>
                        <li>
                            <img src={IconeEnd} alt="End Icon" />
                            <span>Curitiba / PR - Brazil</span>
                        </li>
                        <li>
                            <img src={IconeMail} alt="Email Icon" />
                            <span>jose.marinho56@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}