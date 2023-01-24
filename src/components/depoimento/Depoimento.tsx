import { CardDepoimento } from '../card/CardDepoimento'
import './depoimento.scss'

import DepoimentoAvatar from './../../assets/people/depoimento2.png'

export const Depoimento = () => {
    return (
        <section id='depoimento' className="depoimento secondary">
            <div className="container__depoimento center">
                <div className="titulo__depoimento">
                    <h2>Depoimentos de quem já passou por aqui</h2>
                </div>

                <div className="box__depoimentos">
                    <CardDepoimento 
                        depoimento='Eu sou cliente do Beautysalon há 5 anos 
                        e não troco por nada! Certamente meu cabelo mudou 
                        muito depois que comecei a tratar somente com 
                        produtos naturais e veganos. São profissionais 
                        incríveis e qualificados.'
                        
                        autor="Wanessa Souza"/>
                    <CardDepoimento 
                        depoimento='Minha mãe frequenta o salão há anos 
                        e me levou um dia para conhecer. Minha experiência 
                        foi incrível, eu continuo fazendo o a terapia 
                        capilar e isso salvou o meu cabelo. Adoro todos os
                        profissionais do Beautysalon.'
                        
                        avatar={DepoimentoAvatar}
                        autor='Luna Falcão'/>
                </div>

                <div className="toggle">
                    <span className='circle active'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                </div>
            </div>
        </section>
    )
}