// Express uit de nodemodules map
import { log } from "console";
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


app.get("/producten", (request, response) => {
  let productenUrl = url ;
  fetchJson(productenUrl).then((data) => {
    response.render("producten", data);
  });
});

app.get('/proces', (request, response) => {
  let id = request.query.productId || "clerg7e1y032z0auq7ex5rid9";
  let detailUrl = url2 + "/product?id=" + id;
  
  fetchJson(detailUrl).then((data) => {
    response.render("proces", data);
  });
})

app.get('/agenda', function (req, res) {
  res.render('agenda')
})


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
