const express = require('express')
const app = express()
const routes = require('./routes')
const port = 8090
const db = require("./models");
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(routes)

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

app.listen(port, () => {
    console.log(`App is up and running on port ${port}`)
})