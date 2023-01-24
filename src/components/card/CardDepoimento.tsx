import './cards.scss'

import Depoimento1 from './../../assets/people/depoimento1.png'

interface CardDepoimentoProps {
    depoimento: string
    avatar?: string
    autor: string
}


export const CardDepoimento = ({depoimento, avatar, autor}: CardDepoimentoProps) => {

    return (
        <div className="carddepoimento">
            <p className="texto__depoimento">
                <span>"</span> {depoimento}
            </p>

            <div className="autor__depoimento">
                <div className="avatar__autor">
                    <img src={avatar? avatar: Depoimento1} alt="Depoimento" />
                </div>
                <div className="nome__autor">{autor}</div>
            </div>
        </div>
    )
}