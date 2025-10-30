import React from "react"
import { Link } from "react-router-dom"
import "../styles.css"

export default function Login() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-inner">
          <div className="brand">Z4 Monitor</div>
          <nav className="nav-links">
            <Link to="/" className="nav-link">Login</Link>
            <Link to="/cadastro" className="nav-link">Cadastro</Link>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </nav>
        </div>
      </div>

      <main className="page">
        <div className="card">
          <h1>Login</h1>
          <p>Entre para acessar o painel de monitoramento.</p>

          <div className="field">
            <label className="label">Usuário</label>
            <input className="input" type="text" placeholder="Digite seu usuário" />
          </div>

          <div className="field">
            <label className="label">Senha</label>
            <input className="input" type="password" placeholder="Digite sua senha" />
          </div>

          <div className="btn-row">
            <button className="btn" onClick={() => fetch('/login')}>
              Fazer Login
            </button>
            <Link to="/cadastro" className="btn secondary">
              Criar conta
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}






