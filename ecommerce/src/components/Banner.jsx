import BannerImg1 from "../assets/card1.jpg"
import BannerImg2 from "../assets/card2.jpg"
import BannerImg3 from "../assets/card3.jpg"
const Banner = () => {
    return(
        <div className="container-fluid my-3 bg-light">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src={BannerImg1} className="card-img-top" alt="banner#1"/>
                        <div className="card-body text-center">
                            <h5 className="card-title">Armonia en tus espacios</h5>
                            <p className="card-text">Las luces inteligentes ayudan a crear espacios con un toque de relajación unico. </p>
                            <a href="#" className="btn btn-actions">Conoce más</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" >
                            <img src={BannerImg2} className="card-img-top" alt="banner#2"/>
                            <div className="card-body text-center">
                                <h5 className="card-title">Quien toca a tu puerta?</h5>
                                <p className="card-text">Las camaras de seguridad inteligetes brindan tranquilidad en cualquier momento del día.</p>
                                <a href="#" className="btn btn-actions">Conoce más</a>
                            </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" >
                            <img src={BannerImg3} className="card-img-top" alt="banner#3"/>
                            <div className="card-body text-center">
                                <h5 className="card-title">Controla a tu hogar con tu voz</h5>
                                <p className="card-text">Con Alexa no solo pudes oir musica puedes controlar todos tus dispositos inteligentes.</p>
                                <a href="#" className="btn btn-actions">Conoce más</a>
                            </div>
                    </div>
                </div>               
            </div>
        </div>
    )
}
export default Banner;