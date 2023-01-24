import './button.scss'

interface ButtonProps {
    text: string
    icone?: string
    url?: string
}

export const Button = ({text, icone, url}: ButtonProps) => {

    if (icone) {
        return (
            <a className='button__btn' target="_blank" href={url}><img src={icone} alt="" /> {text}</a>
        )
    } else {
        return (
            <a href={url} className='button__btn'>{text}</a>
        )

    }

}