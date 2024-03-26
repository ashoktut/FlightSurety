

import http from 'http'
import app from './server'

const server = http.createServer(app)
let currentApp = app
currentApp.get('/api', (req, res) => {
    res.send({
      message: 'another message',
    });
});

server.listen(3000, () => {
    const port = server.address().port;
    console.log(`Server is running on port ${port}`);
  });
// server.listen(3000)

if (module.hot) {
 module.hot.accept('./server', () => {
  server.removeListener('request', currentApp)
  server.on('request', app)
  currentApp = app
 })
}