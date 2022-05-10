const createServer = require('./server.js');

const app = createServer();

app.listen(80, () => { console.log('Listening on port 80') });

