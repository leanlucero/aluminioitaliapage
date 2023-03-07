import { useState , useContext, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import LoginContext from "./Context/LoginContext"
import { logearse } from "./Service/Conexiones"

export default function Login() {

  const {user, handleAuth} = useContext(LoginContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  let history = useNavigate()

   useEffect(()=>{
     if (user) {
       history("./")
     }
   },[])
  const cambiarNombre = (event) =>{
    setUsername(event.target.value)
  }
  
  const cambiarPass = (event) =>{
    setPassword(event.target.value)
  }

  const login = async () =>{
    const token = await logearse(username, password )
    if (token) {
      console.log(token)
      handleAuth(token)
      history("./")
    }
  }

    return(
      
        <div className="Auth-form-container">
      <form className="Auth-form"  >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Iniciar sesion</h3>
          <div className="form-group mt-3">
            <label>Username </label>
            <input
              type="text"
              value={username}
              className="form-control mt-1"
              placeholder="Enter usermail"
              onChange={cambiarNombre}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              value={password}
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={cambiarPass}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-primary" onClick={()=>login()}>
              Submit
            </button>
            <a href="./" className="btn btn-danger">
              Cancel
            </a>
          </div>
        </div>
      </form>
    </div>
    )
}