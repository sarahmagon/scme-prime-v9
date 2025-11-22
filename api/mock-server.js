// mock-server.js
const express = require('express');
const bodyParser = require('body-parser');
const WebSocket = require('ws');
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3333;
let queue = [];

app.post('/api/mock/enqueue', (req, res) => {
  const job = req.body;
  console.log('[mock] enqueue', job.id);
  queue.push(job);
  setTimeout(() => processJob(job), 400);
  res.json({ ok: true, id: job.id });
});

function processJob(job){
  console.log('[mock] processing', job.id);
  setTimeout(() => {
    const assetUrl = `https://cdn.example.com/${job.id}.${job.type === 'T2I' ? 'png' : job.type === 'I2V' ? 'mp4' : 'txt'}`;
    console.log('[mock] done', job.id, assetUrl);
    broadcast({ event: 'job:done', id: job.id, asset: { id: `asset-${Date.now()}`, type: job.type === 'T2I' ? 'image' : 'video', url: assetUrl } });
  }, 1000 + Math.random()*1200);
}

const server = app.listen(PORT, () => console.log(`Mock server listening ${PORT}`));
const wss = new WebSocket.Server({ server });

function broadcast(msg){
  const raw = JSON.stringify(msg);
  wss.clients.forEach(c => { if (c.readyState === WebSocket.OPEN) c.send(raw); });
}

wss.on('connection', ws => {
  console.log('ws connected');
  ws.on('message', m => { console.log('ws msg', m.toString()); });
});
