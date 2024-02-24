import LogoApple from "../assets/app_store_3x_d293084ca1.png";
import LogoGoogle from "../assets/disponible_google_play_3x_c977cae3bc.png"
import Logo from "./Logo";
import PreFooter from "./PreFooter";
import facebook from "../assets/facebook.svg"
import Instagram from "../assets/instagram.svg"
import TikTok from "../assets/tiktok.svg"

const Footer = () => {
    return(
        <>
        <PreFooter/>
        <div className="container my-2">
            <div className="row my-3">
                <div className="col-md-2">
                    <ul className="nav nav-underline">
                        <li className="nav-item">                            
                            <a className="nav-link text-dark fs-5"  href="#"><img src={facebook} alt=""/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#"><img src={Instagram} alt=""/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#"><img src={TikTok} alt=""/></a>
                        </li>                                                
                    </ul>
                </div>                   
                
                <div className="col-md-8 text-center d-flex justify-content-center">
                        <ul className="nav nav-underline">
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-6"  href="#">Politica de privacidad</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-6" href="#">Defensa del consumidor</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-6" href="#">Protección de datos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-6" href="#">Contacto</a>
                            </li>                        
                        </ul>                
                    </div>
                <div className="col-md-2 text-end">
                     <p className="p-2"><Logo tamano={90}/></p>
                </div>
                <hr />  
            </div>
                     
        </div>
                    
            
        
        </>
        
    )
}
export default Footer;