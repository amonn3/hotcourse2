const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Server ON! 👌');
});

app.listen(4444, () => {
  console.log('🔥 Server started at http://localhost:4444');
});
