import './cards.scss'

import WomanHairIcon from './../../assets/icons/woman-hair.svg'
import TrimIcon from './../../assets/icons/trim.svg'
import CosmeticIcon from './../../assets/icons/cosmetic.svg'

interface CardServiceProps {
    icon: number
    titulo: string
    texto: string
}

export const CardService = ({icon, titulo, texto}: CardServiceProps) => {

    return (
        <div className="cardservice">
            <div className="icon__cardservice">
                <img src={ icon === 1 ? WomanHairIcon : icon === 2 ? TrimIcon : icon === 3 ? CosmeticIcon : ''} alt="Icon Card" />
            </div>
            <div className="titulo__cardservice">{titulo}</div>
            <div className="texto__cardservice">{texto}</div>
        </div>
    )
}