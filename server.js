const express = require('express')
const client = require('prom-client')

const app = express()

const collectDefaultMetrics = client.collectDefaultMetrics
collectDefaultMetrics()

const requestCounter = new client.Counter({
  name: 'app_requests_total',
  help: 'Número total de requisições recebidas pela aplicação',
})

const successfulLogins = new client.Counter({
  name: 'app_successful_logins_total',
  help: 'Número total de logins bem-sucedidos simulados',
})

const responseTimeHistogram = new client.Histogram({
  name: 'app_response_time_seconds',
  help: 'Tempo de resposta das requisições em segundos',
  buckets: [0.1, 0.3, 0.5, 1, 2, 5],
})

app.use((req, res, next) => {
  const end = responseTimeHistogram.startTimer()
  res.on('finish', () => {
    end()
  })
  next()
})

app.get('/', (req, res) => {
  requestCounter.inc()
  res.send('Aplicação com Prometheus, Grafana e NGINX rodando no Kubernetes!')
})

app.get('/login', (req, res) => {
  successfulLogins.inc()
  res.send('Login realizado com sucesso!')
})

app.get('/Login', (req, res) => {
  res.redirect('/login')
})

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType)
  res.end(await client.register.metrics())
})

app.listen(3000, () => {
  console.log('Aplicação rodando na porta 3000')
})

