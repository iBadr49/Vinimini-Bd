
# Website | Vinimini

![image](https://github.com/iBadr49/performance-vinimini/assets/112857932/eb430447-7662-4ed6-82c2-72b1b6fb20bc)

## 📚 Inhoudsopgave

* [Beschrijving](#beschrijving)
* [Gebruik](#gebruik)
* [Kenmerken](#kenmerken)
* [Bronnen](#bronnen)
* [Licentie](#licentie)

## Beschrijving
<strong>Vinimini :</strong>

<p>Wij hebben een profiel pagina gemaakt, waarop de gebruiker zijn/haar proces en agenda kan zien. Ook hebben we een producten en detail pagina gemaakt. Onze userstories waren: <br> 
1. Als ouder wil ik een overzicht zien van alle voedingssupplement producten, zodat ik kan achterhalen of er een geschikt product voor mijn Vini Mini bij zit. <br>
2. Als ouder wil ik in een dagboek aantekeningen kunnen maken zodat ik niet vergeet wat er is gebeurd.</p>
</ul>

## Gebruik

Deze website is gemaakt op een mobile-versie voor opdrachtgeber vinimini, website kan je gebruiken om te zien wat jouw mini (ind) proces is, in de agenda kan je zien op welke dag je welk supplement moet nemen. Verder kan je vinimini producten bekijken.

![image](https://github.com/iBadr49/performance-vinimini/assets/112857932/b1e8e852-38f0-4b40-94da-3442ef9c6e85)
_Productenpagina_

Zie hier in [Figma](https://www.figma.com/file/a80RrCfDm1bI6tPFK00cRh/Mijn-Website-%7C-Performance-vinimini?type=design&node-id=0%3A1&mode=design&t=KNlCp4KpOBGo42e2-1) hoe mijn website eruit ziet.

## Kenmerken

Lijst met gebruikte tools, technieken en communicatie middelen.
Dit project is gemaakt met Node, Express, EJS, progressive enhancement.

Wat is Node:
Node.js is een software platform waarmee ontwikkelaars JavaScript kunnen gebruiken om applicaties te bouwen die op de computer kunnen draaien, net zoals in een webbrowser. Het biedt veel handige functies en is populair vanwege de snelle en efficiënte manier waarop het met data kan omgaan.

Wat is Express:
Express is een framework voor Node.js waarmee ontwikkelaars gemakkelijk web-applicaties en API's kunnen bouwen. Het biedt veel handige tools en functies om het proces te versnellen en te vereenvoudigen, en kan worden aangepast aan de behoeften van elk project. Express is erg populair en wordt veel gebruikt in de ontwikkeling van webtoepassingen en server-side applicaties.

Wat is EJS:
EJS is een sjabloontaal waarmee ontwikkelaars dynamische HTML-pagina's kunnen maken in Node.js-applicaties. Het wordt gebruikt om variabelen, conditionele logica en herbruikbare componenten in HTML-pagina's in te voegen, waardoor het bouwen van webpagina's eenvoudiger en efficiënter wordt.

Progressive Enhancement:
Dit is een benadering van webdesign en ontwikkeling die zich richt op het bouwen van de kernfunctionaliteit van een website op een manier die werkt voor alle gebruikers, ongeacht hun apparaat of browsermogelijkheden.

- De navbar op de website heeft een hamburger menu die met Javascript uitklapt. In deze code zie je hoe dit werkt, maar vooral ook dat hij zonder Javascript nog steeds werkt.

```ejs
  <body>
    <nav>
      <img class="shopping" src="/assets/shopping-cart.png" alt="" />
      <img class="logo" src="/assets/vinimini.png" alt="" />
      <a href="/views/index.ejs" class="profielIcon">
        <img src="/assets/account.png" alt="" />
      </a>
      <a href="#" class="toggle" id="toggle">
        <img src="/assets/menu.png" alt="MenuIcon" />
      </a>

      <div class="menu" id="menu">
        <a href="#" class="close" id="close">
          <img src="/assets/close.png" alt="Close Icon" />
        </a>
        <ul>
          <li><a href="#">Voor Mini</a></li>
          <li><a href="#">Producten</a></li>
          <li><a href="#">Over ons</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
``` 
- Navbar zonder Js

```ejs
    <noscript>
      <style>
        .toggle {
          display: none;
        }
        .no-js-nav {
          display: flex;
          align-items: center;
          padding: 1rem;
          background-color: #f7f7f7;
          border-bottom: 1px solid #ddd;
        }

        .no-js-nav ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          overflow-y: scroll;
        }

        .no-js-nav li {
          padding: 0 1rem;
        }

        .no-js-nav a {
          text-decoration: none;
          color: #333;
          font-size: 1.5rem;
          font-weight: bold;
        }
      </style>

      <nav class="no-js-nav">
        <ul>
          <li><a href="#">Voor Mini</a></li>
          <li><a href="#">Producten</a></li>
          <li><a href="#">Over ons</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </noscript>
```

- Zie de Javascript deel hieronder:

```js
// Menu & Close button
const menu = document.getElementById("menu");
const toggle = document.getElementById("toggle");
const overlay = document.getElementById("overlay");
const close = document.getElementById("close");

// Toggle the menu when the toggle button is clicked
toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
  overlay.classList.toggle("show");
});

// Hide the menu and overlay when the close button is clicked
close.addEventListener("click", () => {
  menu.classList.remove("show");
  overlay.classList.remove("show");
});

// Add a class to the nav element when JavaScript is enabled "NoScript"
document.addEventListener("DOMContentLoaded", function (event) {
  const nav = document.querySelector("nav");
  nav.classList.add("js-nav");
});
```

- Zie de styling hieronder:

```css
/* --------------------------- HEADER */

nav {
  display: flex;
  justify-content: space-between; /* this will position the shopping.png on the left and the toggle on the right */
  align-items: center; /* this will vertically center the logo */
}

nav img.logo {
  margin: 0 auto; /* this will horizontally center the logo */
  width: 85px;
  height: 60px;
}

nav a.profielIcon img {
  margin-right: 10px;
  width: 32px;
  height: 32px;
}

/* Styles for the menu */
.menu {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background-color: var(--yellow);
  padding: 1rem;
  display: none;
}

.menu.show {
  display: block;
}

.menu ul {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 10em;
}

.menu li {
  padding: 0.5rem 1rem;
  text-align: center;
}

.menu a {
  color: #333;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  display: block;
}
```


<strong>TOOLS :</strong>
- Pen&papier
- Vscode
- Laptop
- Figma

<strong> GEBRUIKTE TECHNIEKEN : </strong>
- Html
- Css
- Node
- Ejs
- Javascript
- Noscript


<strong> COMMUNICATIE MIDDELEN : </strong>
- Microsoft Teams
- Whatsapp



## Bronnen

- https://github.com//
- https://www.google.nl/
- https://codepen.io/
- https://developer.mozilla.org/en-US/
- https://css-tricks.com/
  




## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
