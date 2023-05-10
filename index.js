// Express uit de nodemodules map
import express from "express";
import { ppid } from "process";

const url = "https://api.vinimini.fdnd.nl/api/v1/producten"; // URL naar Json data
const url2 = 'https://api.vinimini.fdnd.nl/api/v1';

// Maak een nieuwe express app aan
const app = express();

//  Stel in hoe we express gebruiken
app.set("view engine", "ejs");
app.set("views", "./views");

// Gebruik maken van de "public" map
app.use(express.static("public"));

// Maak een route voor de index

app.get('/', (request, response) => {
  response.render('index')
})


// app.get("/producten", (request, response) => {
//   let productenUrl = url ;
//   fetchJson(productenUrl).then((data) => {
//     response.render("producten", data);
//   });
// });


app.get('/proces', (request, response) => {
  response.render('proces')
})

// Post note (notitie) to API
app.post('/agenda', function (req, res, next) {

  req.body.afgerond = false
  //req.body.persoonId = 'clemozv3c3eod0bunahh71sx7'
  req.body.datum = req.body.datum + ':00Z';
  req.body.herinnering = [req.body.herinnering + ':00Z']
  console.log(req.body)
  
  postJson(url2 + '/notities', req.body).then((data) => {

    // console.log(JSON.stringify(data))

    let newNotitie = { ... req.body }
    
    if (data.success) {
      res.redirect('/agenda') 
      // TODO: squad meegeven, message meegeven
      // TODO: Toast meegeven aan de homepagina
    } else {
      const errormessage = `${data.message}: Mogelijk komt dit door de slug die al bestaat.`
      const newdata = { error: errormessage, values: newNotitie }
      
      res.render('agenda', newdata)
    }
  })
});

app.get("/detail", (request, response) => {
  let id = request.query.detailId || "clerps05z09jm0aw3vccjq5un";
  let detailUrl2 = url2 + "/product?id=" + id;
  console.log(detailUrl2);
  fetchJson(detailUrl2).then((data) => {
    // console.log(data)
    response.render("detail", data);
  });
});

// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

async function fetchJson(url, payload = {}) {
  return await fetch(url, payload)
    .then((response) => response.json())
    .catch((error) => error);
}
