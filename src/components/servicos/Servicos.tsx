import { CardService } from "../card/CardService"
import './servicos.scss'

export const Servicos = () => {
    return (
        <section id='servicos' className="servicos primary">
            <div className="container__servicos center">
                <div className="titulo__servicos">
                    <h2 className="title__servico">Serviços</h2>
                    <p className="texto__servico">Com mais de 10 anos no mercado, o <span>Beautysalon</span> já 
                        conquistou clientes de inúmeros países com seus 
                        tratamentos exclusivos e totalmente naturais</p>
                </div>

                <div className="cards__servicos">
                    <CardService icon={1} titulo="Terapia capilar" texto="Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos." />
                    <CardService icon={2} titulo="Cortes" texto="A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos." />
                    <CardService icon={3} titulo="Tratamentos" texto="O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo." />
                </div>
            </div>  
        </section>
    )
}