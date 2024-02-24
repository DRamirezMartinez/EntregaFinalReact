import imgCarrousel1 from "../assets/Comp-carrousel copy3.png"
import imgCarrousel2 from "../assets/Carrousel2.png"
import imgCarrousel3 from "../assets/carrousel3.png"
const Carrousel = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div id="carouselExampleCaptions" className="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active ">
                                <img src={imgCarrousel1} className="d-block w-100" alt="banner#1"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Estamos Comprometidos</h5>
                                    <p>Brindando soluciones inteligentes par tu hogar.</p>
                                </div>
                                </div>
                                <div className="carousel-item">
                                <img src={imgCarrousel2} className="d-block w-100" alt="banner#2"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>La seguridad primero</h5>
                                    <p>Contamos con la experiencia y queremos que te sientas seguro.</p>
                                </div>
                                </div>
                                <div className="carousel-item">
                                <img src={imgCarrousel3} className="d-block w-100" alt="banner#3"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Siempre en linea</h5>
                                    <p>Controla la sistematización de tu hogar desde cualquier lugar.</p>
                                </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Carrousel;