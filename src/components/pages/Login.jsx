import { API_URL } from "../../constants/env"
import axios from "axios"
const Login = () => {

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert("Formulario enviado")

        const data = {
            email:e.target.email.value,
            password:e.target.password.value
        }

        axios.post(`${API_URL}/users`, data)
        .then(resp=>console.log(resp))
        .catch(error=>console.log(error))
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="Correo electronico" required/>
            <input type="password" name="password" placeholder="Contrasenia" required/>
            <button type="submit">Ingresar</button>

        </form>
    )
}

export default Login