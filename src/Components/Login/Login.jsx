import {FaUser, FaLock} from "react-icons/fa";

import { useState } from "react";

import "./Login.css";

const Login = () => {

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault(); //Não deixa que a pagina recarregue toda vez que clica em entrar

    alert("Enviando os dados:" + username + " - " + password); 
  };

  return (
    <div className="loginBackGround">
      <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o Sistema</h1>
        <div className="input-field">
        <input 
        type="email" 
        placeholder="E-mail" 
        onChange={(e) => setUsername(e.target.value)} 
        />
        <FaUser className="icon" />
        </div>
        <div className="input-field">
        <input 
        type="password" 
        placeholder="Senha" 
        onChange={(e) => setPassword(e.target.value)}
        />
        <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembrar de mim
          </label>
          <a href="#"> Esqueceu a senha?</a>
        </div>
        
        <button>Entrar</button>

        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registrar</a>
          </p>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login
