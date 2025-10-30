import React from "react"
import { Link } from "react-router-dom"
import "../styles.css"

export default function Cadastro() {
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
          <h1>Cadastro</h1>
          <p>Crie sua conta para começar o monitoramento.</p>

          <div className="field">
            <label className="label">Nome Completo</label>
            <input className="input" type="text" placeholder="Seu nome" />
          </div>

          <div className="field">
            <label className="label">Email</label>
            <input className="input" type="email" placeholder="voce@email.com" />
          </div>

          <div className="field">
            <label className="label">Senha</label>
            <input className="input" type="password" placeholder="Crie uma senha" />
          </div>

          <div className="btn-row">
            <button className="btn">Cadastrar</button>
            <Link to="/" className="btn secondary">Já tenho conta</Link>
          </div>
        </div>
      </main>
    </>
  )
}




