import './sobre.scss'

import ImageSobre from './../../assets/image/sobre.png'

export const Sobre = () => {
    return (
        <section id='sobre' className="sobre secondary">
            <div className="container__sobre center">
                <div className="image__sobre">
                    <img src={ImageSobre} alt="Image Sobre" />
                </div>

                <div className="texto__sobre">
                    <h2 className="titulo__sobre">Sobre nós</h2>

                    <p className="conteudo__sobre">Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, 
                        id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl
                        laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa 
                        vitae, vehicula risus.
                    </p>

                    <p className="conteudo__sobre">In placerat, felis vitae sodales dictum,
                        lacus quam pretium mi, ut pretium urna turpis eu dui. Vestibulum id ullamcorper
                        nibh. Donec luctus, nunc finibus elementum suscipit, tortor augue vulputate sapien,
                        vitae feugiat enim augue sed.
                    </p>

                    <p className="conteudo__sobre">Quisque id aliquam elit. Suspendisse congue pharetra maximus.
                        Duis rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu tincidunt tincidunt.
                        Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt tellus, elementum
                        elementum lorem nisl eleifend dolor. Nullam eget dui at sem ullamcorper luctus.
                    </p>
              
                </div>
            </div>
        </section>
    )
}