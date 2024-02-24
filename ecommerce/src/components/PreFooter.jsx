
const PreFooter = () => {
    return(
        <div className="container-fluid my-3 bg-prefooter bg-opacity-70">
            <div className="row">                
                <div className="col py-3">
                    <div className="container">                        
                        <div className="row">
                            <div className="col-md-2">                                
                            </div>
                            <div className="col-md-8 text-center text-white d-flex align-items-center">
                                <div className="row mx-1">
                                    <h2>Necesitas Ayuda?</h2>
                                    <p>Revisa nuestros <b>tutoriales</b> para configurar tus dispositivos</p>
                                </div>                                
                            </div>
                            <div className="col-md-2 d-flex align-items-center justify-content-start">
                                <a href="#" className="btn btn-light">Ver tutoriales</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}
export default PreFooter;