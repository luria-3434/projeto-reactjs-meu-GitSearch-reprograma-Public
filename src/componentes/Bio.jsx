import Subtitle from './Subtitle.jsx'
import Paragraph from './Paragraph.jsx'
import Photo from './Photo'

function Bio() {
    return (
        <header>
            <div className="subtitle">
                <Subtitle className="subtitle" text="Hello aqui é a Luria" />
            </div>


            <Photo src="https://avatars.githubusercontent.com/u/105984536?s=96&v=4" alt="Foto Luria, eu sou uma mulher negra com cabelos cacheados escuros, estou com uma blusa branca e um anel bem grande redondo amarelo" />


            <div className="paragrafo">
                <Paragraph text="Sou formada em Design de moda. No início desse ano comecei um processo de transição de carreira para a área de tecnologia (programação front-end) " />
            </div>
        </header>
    )
}

export default Bio