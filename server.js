const express = require ('express');
const client = require ('prom-client');

const app = expres();
const collectDefaultMetrcs = client.collectDefaulMetrics;
collectDefaultMetrics;

const counter = new client.Counter({
    
    name:"app_requests_total",
    help:"contador de requisições recebidas"

});

app.get('/', (req,res)=>{
    counter.inc();
    res.send("Promethes+grafana+Kubernetes");
});

app.get('/metrics', async (req,res) =>{
    res.set("content-type", client.register.contentType);
    res.end(await client.register.metrics())
});

app.listen(3000, () => {
    console.log("App running on port 3000");
});