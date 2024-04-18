const path = require('path');

const express = require('express')
const bodyParser = require('body-parser');

const app = express();

const sequelize = require('./util/database')

const cors = require('cors');

app.use(bodyParser.json({extended:false}));

app.use(cors);

sequelize.sync({force:true})
.then((result) => {
    app.listen(6000);
})
.catch(err => console.log(err));

