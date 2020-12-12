const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 8000;

// parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Panggi routes
var routes = require('./routes');
routes(app);

app.get('/', (req, res) => {
  res.send('Hello World...')
})

app.listen(PORT, () => {
  console.log(`Server di port http://localhost:${PORT}`);

})