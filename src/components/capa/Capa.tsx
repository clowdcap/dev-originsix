import { TituloComponent } from '../TituloComponent/TituloComponent'
import './capa.scss'

import ImageCapa from './../../assets/image/capa.png'

export const Capa = () => {
    return (
        <section id='inicio' className="capa primary">
            <div className="container__capa center">
                <div className="titulo__capa">
                    <TituloComponent 
                        title='Saúde natural para os seus cabelos'
                        subtitle='Um salão exclusivo em São Paulo, especializado em tratamentos naturais.'
                        btnText='Agendar um horário'
                        urlBtn="#contato"/>
                </div>
                <div className="image__capa">
                    <img src={ImageCapa} alt="Image capa" />
                </div>
            </div>
        </section>
    )
}