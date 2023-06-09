const path = require("path")
require('./db/mongoose')
const Search = require('./models/search')
const express = require("express")
const hbs = require("hbs")
require('./utils/helpers')


// Generate the application
const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

// Setup handlebars engine and views location
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
    res.render('index', {});
});

app.get('/contatti', (req, res) => {
    res.render('contatti', {});
});

app.get('/proposte', (req, res) => {
    res.render('proposte', {});
});

// Start the server
app.listen(port, () => {
    console.log("Server is up on port " + port)
})