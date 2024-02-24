import { Link } from "react-router-dom";
import LogoHeader from "../assets/DomoticaLogo.png"

const Logo = ({tamano}) => {
    return(
        <Link>
        <img src={LogoHeader} alt="Logo(empresa)" width={tamano} />
        </Link>
        
        
        
    )
}
export default Logo; 