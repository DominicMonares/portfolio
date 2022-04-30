const createServer = require('./server.js');

const app = createServer();

app.listen(3000, () => { console.log('Listening on port 3000') });

