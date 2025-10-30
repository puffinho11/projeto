import React from "react"
import { Link } from "react-router-dom"
import "../styles.css"

export default function Dashboard() {
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
        <div className="container">
          <h1 className="center">📈 Dashboard de Métricas</h1>

          <div className="kpis">
            <div className="kpi">
              <div className="value" id="kpi-logins">124</div>
              <div className="label">Logins realizados</div>
            </div>
            <div className="kpi">
              <div className="value" id="kpi-users">45</div>
              <div className="label">Usuários cadastrados</div>
            </div>
            <div className="kpi">
              <div className="value" id="kpi-lat">27ms</div>
              <div className="label">Latência média</div>
            </div>
            <div className="kpi">
              <div className="value" id="kpi-req">150</div>
              <div className="label">Requisições ativas</div>
            </div>
          </div>

          <div className="panel">
            <h2>Ações</h2>
            <div className="btn-row">
              <button className="btn" onClick={() => fetch('/login')}>Simular Login</button>
              <a href="/metrics" className="btn secondary">Ver Métricas</a>
            </div>
          </div>

          <div className="panel">
            <h2>Últimos Eventos</h2>
            <div className="list">
              <div className="list-item"><span>Login realizado</span><span>agora</span></div>
              <div className="list-item"><span>Cadastro aprovado</span><span>há 2 min</span></div>
              <div className="list-item"><span>Nova métrica coletada</span><span>há 4 min</span></div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
