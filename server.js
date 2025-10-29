const express = require('express')
const client = require('prom-client')

const app = express()

const collectDefaultMetrics = client.collectDefaultMetrics
collectDefaultMetrics()

const requestCounter = new client.Counter({
  name: 'app_requests_total',
  help: 'Contador de requisições recebidas pela aplicação'
})

const responseTimeHistogram = new client.Histogram({
  name: 'app_response_time_seconds',
  help: 'Histograma do tempo de resposta das requisições em segundos',
  buckets: [0.1, 0.3, 0.5, 1, 2, 5]
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
  res.send('Aplicação com Prometheus + Grafana + NGINX + Kubernetes');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType)
  res.end(await client.register.metrics())
})

app.listen(3000, () => {
  console.log('Aplicação rodando na porta 3000')
})
