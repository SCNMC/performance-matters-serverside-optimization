require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000;
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

// Stel ejs in als template engine
app.set('view engine', 'ejs')
app.set('views', './views')


// Stel een static map in
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', function (req, res) {
  // res.send('Hello world!')
  res.render('index', {
    pageTitle: 'Performance Optimalisatie',
  })
})

//fetch api project data//
app.get('/', (req, res) => {
  fetchJson("https://chipr.api.fdnd.nl/v1/projects").then(function (jsonData) {
      res.render('index', {
        title: 'Dit is de chippr api',
        projects: jsonData.data,
      })
    })
  })

  // get detail page id//

  app.get("/:id", (req, res) => {
      fetchJson(`https://chipr.api.fdnd.nl/v1/project/${req.params.id}`).then(
        function (jsonData) {
          res.render("detail", {
            project: jsonData.data[0],
          });
        }
      );
    });

// Zwengel de server aan
app.listen(process.env.PORT || 3000, () => console.log(`App avaialble on http://localhost:3000`))

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
 async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
}