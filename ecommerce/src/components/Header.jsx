// import BtnAgenda from "./BtnAgenda";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
    return(
        <div className="container-fluid bg-light">
            <div className="row">
            <div className="container my-3">
            <div className="row">
                <div className="col-md-1 d-flex align-items-center mx-2">
                   <Logo tamano={150} />
                </div>
                <div className="col-md-9 d-flex align-items-center justify-content-center">
                    <NavBar/>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-center">
                    {/* <BtnAgenda/> */}
                </div>
            </div>
        </div>
            </div>
        </div>

        
    )
}
export default Header;