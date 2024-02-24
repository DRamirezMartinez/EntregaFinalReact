import LogoInferior from "../assets/logoPrefooter.png"
const LogoPreFooter = ({LogoGrande}) => {
    let tamano = LogoGrande ? 190 : 80;
    return(
       <img src={LogoInferior} alt="LogoPreFooter"  width={tamano} className="img-fluid"/>
    )
}
export default LogoPreFooter;