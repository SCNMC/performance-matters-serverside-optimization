> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# 😀 performance-matters-serverside-optimization-Chippr.dev
In deze deeltaak ga ik de overzichtspagina van Chippr optimaliseren door gebruik te maken van Minifying, code splitting, caching en compressie.


## Serverside Performance Optimalisatie
Beschrijf de website die je hebt geoptimaliseerd, voeg screenshots van de performance audit voor en na het uitvoeren en beschrijf de verbeterde performance. Met andere woorden, welke winst heb je behaald door dit allemaal te doen! Voeg de url en een screenshot van de geoptimaliseerde website toe.

### Performance audit: 

Voor minifying, caching en compressie:

<img width="700" alt="Schermafbeelding 2022-04-29 om 12 39 23" src="https://user-images.githubusercontent.com/90189750/165929518-dd50e579-530b-4592-9471-efc3b15971db.png">

Na optimization:


<img width="700" alt="Schermafbeelding 2022-05-11 om 11 09 25" src="https://user-images.githubusercontent.com/90189750/167813950-1c886ec0-b84f-4005-8596-da99ecbeceb8.png">


### Resources:
<img width="463" alt="Schermafbeelding 2022-04-29 om 12 14 54" src="https://user-images.githubusercontent.com/90189750/165929977-b5c625b3-ae64-4741-9891-c6909f27d8ad.png">

Door de pagina te gaan optimaliseren hoop ik het aantal kb aan resources te verminderen waardoor de pagina sneller word.

### Minifying
<img width="700" alt="Schermafbeelding 2022-05-11 om 10 41 41" src="https://user-images.githubusercontent.com/90189750/167807762-996ebd25-d4ef-4cf0-9b2b-8f35b4bb5b31.png">

zoals hier te zien hebben de bestanden styles.css en header.css een grootte van 266 B en 265 B. Dit kan vele malen kleiner gemaakt worden zodat dit ook sneller ingeladen word. Ik heb daarom besloten om deze bestanden te minifyen door gebruik van PostCss, Cssnano en autoprefixer. 

<img width="790" alt="Schermafbeelding 2022-05-11 om 10 45 25" src="https://user-images.githubusercontent.com/90189750/167808765-51b38daf-48e6-442c-b3b4-76a0ece7e7c2.png">




### Code splitting
Ik heb geen gebruik gemaakt van client side javascript dus het splitten van code was niet nodig.

### Caching
Beschrijf welke caching opties je gekozen hebt en waarom je dat op deze manier doet.

### Compressie
Beschrijf hoe je compressie hebt ingezet en waarom je die keuze hebt gemaakt.

## Bronnen
Beschrijf de door jou gebruikte bronnen om bovenstaande stappen uit te voeren.

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
