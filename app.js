const express = require('express');
const app = express();
const {sequelize} = require('./db'); //var db = require('./db');
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller')
const PORT = process.env.PORT || 4000

sequelize.sync();
app.use(require('body-parser').json()); //app.use(require('body-parser'));
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))
app.use('/api/game', game);
app.listen(PORT,function() {
    console.log("App is listening on 4000");
})