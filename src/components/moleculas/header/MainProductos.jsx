import { Link, useNavigate } from "react-router-dom"

const MainProductos = () => {
    
    let navigate = useNavigate()

    const listarProductos = productos.map( (prod, index) => <div key={index} onClick={()=>navigate(`/detalles-producto/${index}`)}><img src={prod.url} alt="" /></div>)    
    return (
        <div className="container-principal-productos">
            <div className="container-parrafo-productos">
                <p><b>Lo mas top</b> del Flash Sale</p>
            </div>
            <div className="container-productos"> 
                {listarProductos}  
            </div>
        </div>
    )
}
export default MainProductos