// Import Styles
import './App.scss'

/* Import Components */
import { Capa } from './components/capa/Capa'
import { Contato } from './components/contato/Contato'
import { Depoimento } from './components/depoimento/Depoimento'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Servicos } from './components/servicos/Servicos'
import { Sobre } from './components/sobre/Sobre'

function App() {

  return (
    <>
      <Header />
      <Capa />
      <Sobre />
      <Servicos />
      <Depoimento />
      <Contato />
      <Footer />
    </>
  )
}

export default App
