const express = require('express')
const client = require('prom-client')
const os = require('os')

const app = express()
const collectDefaultMetrics = client.collectDefaultMetrics
collectDefaultMetrics()

const requestCounter = new client.Counter({
  name: 'app_requests_total',
  help: 'Número total de requisições recebidas pela aplicação'
})

const loginCounter = new client.Counter({
  name: 'app_logins_total',
  help: 'Número total de logins realizados com sucesso'
})

const responseTime = new client.Histogram({
  name: 'app_response_time_seconds',
  help: 'Tempo de resposta das requisições em segundos',
  buckets: [0.1, 0.3, 0.5, 1, 2, 5]
})

app.use((req, res, next) => {
  const end = responseTime.startTimer()
  res.on('finish', () => end())
  next()
})

app.get('/', (req, res) => {
  requestCounter.inc()
  res.send(`
    <h2>🚀 Aplicação Z4 Monitor rodando com CI/CD!</h2>
    <p>Ambiente: <b>${process.env.NODE_ENV || 'produção'}</b></p>
    <p>Servidor: <b>${os.hostname()}</b></p>
    <p>Prometheus, Grafana e NGINX integrados com Kubernetes.</p>
    <p>Deploy contínuo via GitHub Actions e Railway ✅</p>
  `)
})

app.get('/login', (req, res) => {
  loginCounter.inc()
  res.send('✅ Login simulado com sucesso!')
})

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType)
  res.end(await client.register.metrics())
})

app.listen(3000, () => {
  console.log('Aplicação rodando na porta 3000')
})


