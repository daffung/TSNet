const express = require('express');
const app = express();
//const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

var Database = require('./db/database');
var routes = require('./routes/core.server.routes');

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(express.urlencoded())

app.use('/public', express.static('public'));
app.use(cors());

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.set('views', './views');

// Website routes
app.use('/', routes);

server.listen(PORT, () => {
  console.log("Server running on PORT -> " + PORT);
});
