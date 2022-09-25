const express = require('express');
const routes = require('./routes');

const app = express();
app.use(routes);

app.listen(4444, () => {
  console.log('🔥 Server started at http://localhost:4444');
});
