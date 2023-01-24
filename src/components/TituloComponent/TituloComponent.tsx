import './titulocomponent.scss'
import { Button } from "../button/Button"

interface TituloComponentProps {
    title: string,
    subtitle: string,
    btnText: string,
    icon?: string
    urlBtn?: string
}

export const TituloComponent = ({title, subtitle, btnText, icon, urlBtn}: TituloComponentProps) => {

    return (
        <div className="alinhamneto__titulo">
            <h1 className="titulo__titulo">{title}</h1>
            <h3 className="subtitulo__titulo">{subtitle}</h3>
            <Button icone={icon} text={btnText} url={urlBtn} />
        </div>
    )
   
}
